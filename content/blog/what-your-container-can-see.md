---
title: "What Your Container Can See"
description: "We poked around inside a Railway container and found co-tenant storage, live deploy logs, and host hardware identifiers. Shared-kernel isolation has limits."
date: "2026-04-13"
category: "Security"
author:
  - peron
published: true
featured: false
keywords: ["containers", "security", "isolation", "Firecracker", "Railway", "information-leak"]
---

Last month we reverse engineered Claude Code web and found Anthropic runs it on Firecracker microVMs. In the replies, we assumed Railway does the same. Railway's CEO corrected us.

![](/blog/railway-ceo-reply.jpg)

But nobody in the thread knew what Railway actually runs either. So we went and looked.

We deployed a few services and ran `cat /etc/hosts`. This came back:

```
127.0.0.1  localhost production-stacker-aws-us-west-1a-r8i12xlarge-20
```

Provider, availability zone, instance type, fleet index. All from the hostname. We redeployed a few times and also landed on:

```
127.0.0.1  localhost production-stacker-sv2a-metal-058-04
```

Santa Clara bare metal. Server 058, VM 04.

A few hours with `cat`, `ls`, `lsblk`, and `lspci` later, we'd figured out what Railway is actually running. We're building ArcBox, a PaaS on Firecracker microVMs, and we went in expecting to confirm that containers on a shared kernel leak information that a VM boundary would hide. That's what we found.

## It's containerd + crun on ZFS

Railway doesn't use Docker or Kubernetes for user workloads. They run a custom orchestrator called Stacker. Containers run on containerd with crun as the OCI runtime, directly on the host kernel. Storage is ZFS. Networking is a WireGuard mesh with BPF classifiers filtering traffic per container.

Railway has blogged about stackers, WireGuard networking, and ZFS-backed storage. What they haven't documented is the specific runtime: containerd + crun. We identified crun from the masked paths (`/crun/.empty-directory` in the mount table) and the AppArmor profile naming convention (`containers-default-0.67.0`). `/proc/modules` filled in the rest: ZFS with 494 active users, overlay with 1,853 mounts, 3,429 BPF classifiers.

```
Host kernel (shared by all tenants)
  └── containerd + crun
       ├── Tenant A
       ├── Tenant B
       └── ... × 615 on AWS, × 1,200–2,500 on bare metal
```

No user namespace remapping. UID 0 in the container is UID 0 on the host. Standard for a container PaaS that relies on seccomp and AppArmor for isolation.

## Every co-tenant's storage is visible

`lsblk` shows every ZFS zvol on the host. On AWS, ~615. On bare metal, ~1,198. Most are ephemeral rootfs (Railway wipes the filesystem on each deploy). The larger ones (46.6G) are likely persistent volumes, which are opt-in. Either way, you can see every zvol, its size, and watch them come and go.

## Hardware identifiers are exposed

DMI fields in `/sys/devices/virtual/dmi/id/` expose the EC2 instance ID (`i-00324773470d2b0d8`) and VM UUIDs. NVMe sysfs exposes EBS volume serials (`vol-0b0ac4208526f2fef`). `/proc/cpuinfo` gives CPU model and microcode revision. On bare metal: QEMU VM UUID `400bee01-cb61-49d4-9c5f-2298c7f14d26`, SeaBIOS 1.16.2, AMD EPYC 9655P at microcode `0xb00215a`.

## You can watch other tenants deploy in real time

`/proc/spl/kstat/zfs/dbgmsg` is a live log of ZFS operations across all tenants on the host:

```
command: zfs snapshot railway_0/vol_spzpfq42gizfx6qf@vs_1773897312414_rp3otlpkd6ecet1i
command: zfs destroy railway_0/vol_4a4pub3aeuyo7mo9@vs_1773293041863_anv07sjfe5dnh5v2
command: zfs destroy -r railway_0/vol_b97j4guhrpkk294w
```

The snapshot names encode deployment timestamps in milliseconds. From one host, we can see 339 unique zvols and 108 days of deploy activity: when each container was created, redeployed, or deleted. The per-volume objset entries also expose read/write byte counts and ZIL commit stats.

## The seccomp and AppArmor mitigations

Railway's exploit mitigations are correctly applied. The seccomp filter blocks `io_uring` and `add_key`/`keyctl`. `userfaultfd` is unavailable from the container. AppArmor denies all mount operations, which blocks the entire CrackArmor chain (9 AppArmor CVEs, March 2026) because securityfs can't be mounted. Network isolation is per-project, DNS is scoped, IMDS has no route.

Except the two host classes don't run the same profile. On AWS, `CLONE_NEWUSER` is blocked. On bare metal, it isn't. That means a container on bare metal can create a user namespace with all 41 capabilities and reach kernel surfaces (packet sockets, nftables, vsock) that the rest of the profile is designed to block. Containers are randomly scheduled between the two host classes. Mitigation is mitigation — there are always gaps.

## The information leak problem

Some of the leaks above are maskable. Bind-mount `/dev/null` over the ZFS debug log. Randomize the hostname. Use `lxcfs` to virtualize `/proc/cpuinfo`. Mask `/proc/modules`.

Some aren't. `/sys/block` exposes all block devices because Linux has no block device namespace. Device cgroups control access, not visibility. `/proc/spl/kstat/zfs/` exists because ZFS is a kernel module shared by all tenants.

That's the game with shared-kernel isolation: find a leak, mask it, find the next one. `/proc` and `/sys` are enormous surfaces, and every new kernel module or filesystem is another path to remember to hide.

## Why we chose Firecracker

With a microVM, the tenant gets its own guest kernel on KVM:

```
Host kernel
  └── Firecracker VMM (Jailer sandbox, minimal seccomp profile)
       └── Guest kernel (tenant's own)
            └── Tenant workload
```

The tenant's `/proc` and `/sys` describe the VM, not the host. There are no co-tenant block devices. There's no shared ZFS log. The host kernel isn't directly reachable because KVM is in the way.

Firecracker still uses mitigations — the Jailer applies seccomp, namespaces, cgroups, and chroot to the VMM process itself. But the tenant-facing isolation is the VM boundary, not a policy layer on a shared kernel. The class of information leaks we found on Railway doesn't apply because each tenant sees its own virtual hardware.

MicroVMs cost more per tenant. Density is lower. The runtime is harder to build. We accept those tradeoffs.

---

ArcBox is in the design and build phase, and we'll be sharing more about our architecture as we go.
