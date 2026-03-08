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
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Pill card split layout */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card min-h-120 flex flex-col lg:flex-row">
          {/* Left: content panel */}
          <div className="relative flex flex-col justify-between p-10 lg:p-12 lg:w-1/2">
            <div>
              {/* Icon badge */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 border border-accent/20">
                <ShieldCheck className="h-7 w-7 text-accent" />
              </div>

              <p className="text-sm font-medium text-accent mb-2 tracking-wide uppercase">
                OpenClaw isolation
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance mb-4">
                Even if OpenClaw goes rogue,{' '}
                <span className="text-muted-foreground">
                  your machine is untouched.
                </span>
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-md">
                When you run OpenClaw inside ArcBox, the model operates inside a
                hardened Firecracker microVM. Network, disk, and I/O are
                completely severed from your host—so no matter what the model
                tries to do, it can't reach your system.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {isolationFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-xl bg-secondary/60 border border-border/50 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {f.title}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: background image half */}
          <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-0">
            <Image
              src="/openclaw-screenshot-placeholder.jpg"
              alt="OpenClaw running in an isolated ArcBox sandbox"
              fill
              className="object-cover"
            />
            {/* Gradient blend on left edge for seamless join */}
            <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-card to-transparent" />
            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Floating status badge */}
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-4">
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
        </div>
      </div>
    </section>
  );
}
