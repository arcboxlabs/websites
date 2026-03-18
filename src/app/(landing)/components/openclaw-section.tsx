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

          {/* Visual - Terminal Window */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-black w-full lg:h-[600px] shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 bg-gray-800/50 border-b border-gray-700 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-gray-400 font-mono">openclaw@vm-9f23a</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm overflow-hidden h-full flex flex-col">
                {/* Status indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  <span className="text-green-400 text-xs">Sandbox active</span>
                </div>

                {/* Terminal output */}
                <div className="space-y-3 text-gray-300 flex-1 overflow-hidden">
                  <div>
                    <span className="text-blue-400">$ </span>
                    <span className="text-white">openclaw --tui</span>
                  </div>

                  <div className="space-y-2 ml-2 border-l border-gray-700 pl-3">
                    <div>
                      <span className="text-cyan-400">╭─ OpenClaw TUI</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div>
                        <span className="text-gray-500">▸</span>
                        <span className="text-white ml-2">Network Isolation</span>
                        <span className="ml-2 text-green-400">✓ blocked</span>
                      </div>
                      <div>
                        <span className="text-gray-500">▸</span>
                        <span className="text-white ml-2">Filesystem</span>
                        <span className="ml-2 text-green-400">✓ ephemeral</span>
                      </div>
                      <div>
                        <span className="text-gray-500">▸</span>
                        <span className="text-white ml-2">I/O Operations</span>
                        <span className="ml-2 text-green-400">✓ audited</span>
                      </div>
                      <div>
                        <span className="text-gray-500">▸</span>
                        <span className="text-white ml-2">Syscall Filtering</span>
                        <span className="ml-2 text-green-400">✓ enabled</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-cyan-400">╰─ Resources</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="ml-2">
                        <span className="text-gray-500">├</span>
                        <span className="text-white ml-2">CPU</span>
                        <span className="ml-2 text-amber-400">2 cores</span>
                      </div>
                      <div className="ml-2">
                        <span className="text-gray-500">├</span>
                        <span className="text-white ml-2">Memory</span>
                        <span className="ml-2 text-amber-400">4 GiB</span>
                      </div>
                      <div className="ml-2">
                        <span className="text-gray-500">└</span>
                        <span className="text-white ml-2">Uptime</span>
                        <span className="ml-2 text-amber-400">12m 34s</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <span className="text-blue-400">$ </span>
                    <span className="text-white animate-pulse">_</span>
                  </div>
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
