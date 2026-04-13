---
title: "We Fixed UniFi's Slow PPPoE Performance by Offloading PPPoE to a Separate Device with Half-Bridge"
description: "UniFi gateways (UDM Pro/SE/Pro Max, and friends) ship with notoriously underpowered CPUs and no hardware acceleration for PPPoE or NAT. Paired with a PPPoE-based ISP connection, the performance is even more dismal. So why not hand the PPPoE dialing off to a dedicated device and let the UniFi gateway focus on routing, IDS/IPS, and NAT while breaking past 2000 Mbps of throughput?"
date: "2026-04-13"
category: "Networking"
author:
  - sukka
cover: "/blog/cover/arcbox-desktop-launch.png"
published: true
featured: true
keywords: ["UniFi", "PPPoE", "OpenWrt", "half-bridge", "acceleration", "networking"]
---

> The Simplified Chinese version of this post is available at [Sukka's Blog](https://blog.skk.moe/): [https://blog.skk.moe/post/#TODO](https://blog.skk.moe/post/#TODO)

## Prologue

The overwhelming majority of UniFi gateways, from the UDM Pro/SE/Pro Max and UXG Pro to the EFG, ship with CPUs that support neither PPPoE nor NAT hardware acceleration. As a result, whenever you put a PPPoE-based ISP connection behind one of these gateways, throughput takes a serious hit and never comes close to the rated line speed. This has been well-documented in the UniFi community:

- https://community.ui.com/questions/What-is-the-max-performance-for-PPPOE-on-UDM-Pro-With-Solution/67057f47-509e-4f8b-8edd-5dc29f380759
- https://www.reddit.com/r/Ubiquiti/comments/1dto912/story_time_investigating_slow_pppoe_speeds_on/
- https://forum.level1techs.com/t/unifi-and-bad-pppoe-speeds-any-solutions/224548
- https://community.ui.com/questions/ETA-on-bugfix-for-UDM-Pro-bad-PPPoE-performance/9119aa98-412f-41c7-9188-a30036c2e4c2
- https://www.reddit.com/r/Ubiquiti/comments/1buqkx1/max_speed_pppoe_on_udm_pro_with_10gbit_wan/
- https://www.reddit.com/r/Ubiquiti/comments/1hctxjk/efg_with_pppoe_uk_testing/

In short, UniFi gateway PPPoE performance is pretty grim:

- **UDM Pro/SE**: Speed test results typically land between 700 Mbps and 1200 Mbps on PPPoE.
- **UDM Pro Max**: Typically between 1000 Mbps and 1500 Mbps on PPPoE.
- **EFG**: Typically between 1400 Mbps and 1800 Mbps on PPPoE.
- **UCG Fiber**: Thanks to the MediaTek Filogic 880 SoC, which does include PPPoE hardware acceleration, speed tests can exceed 7000 Mbps on PPPoE.

## PPPoE

PPPoE (Point-to-Point Protocol over Ethernet) is a network protocol that encapsulates PPP (Point-to-Point Protocol) frames inside Ethernet frames; ISPs use it to authenticate and bill broadband users. While PPPoE does add an extra 6-byte PPPoE header and 2-byte PPP protocol header between the Ethernet frame and the IP packet, those 8 bytes of overhead are negligible. The real reason PPPoE kills performance is the protocol itself.

Under a PPPoE-based connection, the router has to add a PPPoE header to every outgoing packet and strip a PPPoE header off every incoming packet. At the packet rates a router sees, this requires either a lot of CPU power or a purpose-built hardware acceleration circuit (ASIC).

For routers without PPPoE hardware acceleration, it gets worse: virtually all PPPoE implementations are single-threaded. Even with a multi-core CPU, PPPoE encap/decap typically runs on a single core. While pfSense's `if_pppoe` implements its own NIC-independent RSS (Receive Side Scaling) and the Linux kernel's `pppoe` module supports RPS/XPS, these only help when there are multiple PPPoE sessions. For a single PPPoE session (i.e. a single broadband connection dialed once) — which is the common case — processing is still pinned to one CPU core.

As of this writing (April 2026), only a handful of UniFi gateways, like the UCG Fiber with its MediaTek Filogic 880, have PPPoE hardware acceleration baked into their SoC. And ironically, the higher-end the UniFi gateway, the less likely its OEM platform is to include PPPoE acceleration: the EFG, for example, uses Marvell's OCTEON TX2 Infrastructure series, which has no such support.

Since most UniFi gateways use OEM platforms that lack PPPoE hardware acceleration, no amount of firmware work can fix the PPPoE performance problem at its root. And given UniFi's well-known engineering quality, even the software-side PPPoE optimizations that *are* possible have been left on the table.

## External PPPoE Half-Bridge Acceleration

Even in 2026, a huge number of ISPs still rely on PPPoE, including Bell Canada, AT&T Fiber, and Xfinity in the US, along with the vast majority of ISPs in Europe, Asia, and China. If the UniFi gateway can't deliver enough PPPoE performance on its own, we can hand the PPPoE dialing to a dedicated device instead. That device dials PPPoE, obtains an IP address (e.g. a public IPv4), strips that IP from the PPPoE virtual interface (e.g. `ppp0`), and hands it down to the UniFi gateway via DHCP. The UniFi gateway gets a public IPv4 via DHCP without carrying any of the PPPoE CPU load, and is free to focus on routing, IDS/IPS, and NAT:

```
       PPPoE session                                    Hand out public IPv4
ISP  <===============> [PPPoE Offloading via OpenWrt] ========================> [UniFi Gateway]
                          Do not own public IPv4                         Own public IPv4 from DHCP WAN
```

This technique is known as **PPPoE Half-Bridge** (also called Zero IP Bridge). The PPPoE offload device does the PPPoE dialing, strips the dialed IPv4 off the PPPoE virtual interface (e.g. `ppp0`), spins up a DHCP server on its physical interface, and hands the dialed IPv4 address down to the downstream router (the UniFi gateway) via DHCP. That way, the PPPoE offload device focuses on PPPoE dialing, and the downstream UniFi gateway gets a public IPv4 via DHCP without carrying any of the PPPoE CPU load.

In fact, some ISP-provided ONU/ONT devices already implement this: certain models expose features like "Advanced DMZ", "IP Passthrough", or "DMZplus". When enabled, the ONU/ONT (which includes PPPoE hardware acceleration) does the PPPoE dialing itself and hands the resulting public IPv4 to the downstream router via DHCP. But plenty of ISP ONU/ONT devices don't offer this, and in those cases you have to build the solution yourself.

## Implementing PPPoE Half-Bridge with OpenWrt

Here, we use OpenWrt's `hotplug.d` mechanism to implement the PPPoE half-bridge acceleration described above. The full code and example configuration are available in the [`arcboxlabs/pppoe-half-bridge` GitHub repo](https://github.com/arcboxlabs/pppoe-half-bridge).

The core of [`arcboxlabs/pppoe-half-bridge`](https://github.com/arcboxlabs/pppoe-half-bridge) consists of two files: `99-half-bridge` and `start-half-bridge.sh`. `99-half-bridge` lives in `/etc/hotplug.d/iface/` and fires whenever PPPoE dialing succeeds and OpenWrt creates a `ppp0`-style virtual interface; it then calls `start-half-bridge.sh` to complete the half-bridge configuration. `start-half-bridge.sh` contains the actual half-bridge logic and, once PPPoE dialing completes, performs the following steps in order:

1. Disables NAT/MASQUERADE on the WAN side of the OpenWrt firewall.
2. Reads the dialed IPv4 address off the PPPoE virtual interface (e.g. `ppp0`).
3. Computes the `/24` subnet the dialed public IPv4 belongs to, uses the first address in that subnet (e.g. `x.x.x.1`) as the gateway for OpenWrt's DHCP server, and sets the correct offset so that OpenWrt's DHCP server hands the dialed public IPv4 (e.g. `x.x.x.114`) to the downstream UniFi gateway.
4. Replaces the default route and adds policy-based routing to implement "source-based routing": packets are sent out on the PPPoE virtual interface that matches their source IP (i.e. the public IPv4 that OpenWrt's DHCP server handed to the downstream router / UniFi gateway). This makes it possible to accelerate multiple PPPoE broadband connections simultaneously.
5. Applies the DHCP server gateway and offset values computed in the previous steps to OpenWrt's DHCP server configuration and restarts the DHCP server to activate them.
6. Restarts the physical interface on OpenWrt (`ifdown && ifup`) to trigger a link-status change, which prompts the downstream UniFi gateway to request a fresh public IPv4 from OpenWrt's DHCP server.
7. For most routers, the above steps are enough to get a public IP via DHCP and be online. For UniFi gateways, however, thanks to their buggy ARP implementation, we additionally need to add static ARP entries on OpenWrt (`ip neigh replace`) to ensure reliable communication between OpenWrt and the UniFi gateway.

You can find the full configuration and usage example from the `EXAMPLE.md` file in the [`arcboxlabs/pppoe-half-bridge` GitHub repo](https://github.com/arcboxlabs/pppoe-half-bridge) as well, which uses a Banana Pi BPI-R4 Pro running OpenWrt as the PPPoE offload device, but you can use any device that supports OpenWrt for this purpose. In our tests, we were able to break past 4000 Mbps of PPPoE throughput.

## Who We Are

We are ArcBox Labs. TODO.
