import Image from 'next/image';
import { Wifi, HardDrive, Activity, ShieldCheck } from 'lucide-react';

const isolationFeatures = [
  {
    icon: Wifi,
    title: 'Network',
    desc: 'Zero outbound access. OpenClaw can\'t exfiltrate data or phone home.'
  },
  {
    icon: HardDrive,
    title: 'Disk',
    desc: 'A scoped, ephemeral filesystem. Your files are never exposed.'
  },
  {
    icon: Activity,
    title: 'I/O',
    desc: 'Strictly audited device I/O. No keyboard sniffing, no clipboard access.'
  },
  {
    icon: ShieldCheck,
    title: 'Process',
    desc: 'Full syscall filtering via seccomp. No escape paths.'
  }
];

export function OpenClawSection() {
  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
                <ShieldCheck className="h-4 w-4" />
                <span>OpenClaw isolation</span>
              </div>
              <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500">
                Coming Soon
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Even if OpenClaw goes rogue,
              <br />
              <span className="text-muted-foreground">
                your machine is untouched.
              </span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              When you run OpenClaw inside ArcBox, the model operates inside a
              hardened Firecracker microVM. Network, disk, and I/O are
              completely severed from your host—so no matter what the model
              tries to do, it can't reach your system.
            </p>

            <div className="space-y-4">
              {isolationFeatures.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card w-full lg:aspect-auto lg:h-[600px]">
              <Image
                src="/openclaw-screenshot-placeholder.jpg"
                alt="OpenClaw running in an isolated ArcBox sandbox"
                fill
                className="object-cover"
              />
              {/* Dark overlay for legibility */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Floating status badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs font-medium text-white/90">
                    Sandbox active — openclaw@vm-9f23a
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: 'Network', value: 'Blocked' },
                    { label: 'Disk', value: 'Ephemeral' },
                    { label: 'I/O', value: 'Audited' }
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-white/5 p-2">
                      <p className="text-[10px] text-white/50 mb-0.5">
                        {stat.label}
                      </p>
                      <p className="text-xs font-semibold text-accent">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
