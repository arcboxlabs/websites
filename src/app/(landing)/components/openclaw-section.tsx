import { Wifi, HardDrive, Activity, ShieldCheck } from 'lucide-react';

const isolationFeatures = [
  {
    icon: Wifi,
    title: 'Network',
    desc: 'Isolated outbound access. OpenClaw can\'t exfiltrate data or phone home.'
  },
  {
    icon: HardDrive,
    title: 'Disk',
    desc: 'A scoped, ephemeral filesystem. Your private files are never exposed.'
  },
  {
    icon: Activity,
    title: 'I/O',
    desc: 'Strictly audited device I/O. No keyboard sniffing, no clipboard access.'
  },
  {
    icon: ShieldCheck,
    title: 'Process',
    desc: 'Full syscall filtering with no escape.'
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
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-sm text-muted-foreground">
                  openclaw@vm-9f23a
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-hidden h-full flex flex-col">
                <div className="space-y-0.5 text-gray-300">
                  {/* Header */}
                  <div className="ml-2">
                    <span className="text-red-400">🦞 OpenClaw Installer</span>
                  </div>
                  <div className="ml-2 text-gray-500">
                    Claws out, commit in—let&apos;s ship something mildly responsible.
                  </div>

                  <div className="h-2" />

                  {/* Detected */}
                  <div>
                    <span className="text-cyan-400">✓</span>
                    <span className="ml-1 text-cyan-400">Detected:</span>
                    <span className="text-white"> linux</span>
                  </div>

                  <div className="h-2" />

                  {/* Install plan */}
                  <div className="text-red-400 font-bold">Install plan</div>
                  <div><span className="text-red-400">OS:</span> <span className="text-white">linux</span></div>
                  <div><span className="text-red-400">Install method:</span> <span className="text-white">npm</span></div>
                  <div><span className="text-red-400">Requested version:</span> <span className="text-white">latest</span></div>

                  <div className="h-2" />

                  {/* Phase 1 */}
                  <div className="text-red-400 font-bold">[1/3] Preparing environment</div>
                  <div><span className="text-cyan-400">✓</span> <span className="text-white">Build tools installed</span></div>
                  <div><span className="text-cyan-400">✓</span> <span className="text-white">Node.js v22 installed</span></div>
                  <div><span className="text-gray-500">·</span> <span>Active Node.js: v22.22.1 (/usr/bin/node)</span></div>
                  <div><span className="text-gray-500">·</span> <span>Active npm: 10.9.4 (/usr/bin/npm)</span></div>

                  <div className="h-2" />

                  {/* Phase 2 */}
                  <div className="text-red-400 font-bold">[2/3] Installing OpenClaw</div>
                  <div><span className="text-gray-500">·</span> <span>Git not found, installing it now</span></div>
                  <div><span className="text-cyan-400">✓</span> <span className="text-white">Git installed</span></div>
                  <div><span className="text-gray-500">·</span> <span>Installing OpenClaw</span></div>
                  <div><span className="text-cyan-400">✓</span> <span className="text-white">OpenClaw npm package installed</span></div>
                  <div><span className="text-cyan-400">✓</span> <span className="text-white">OpenClaw installed</span></div>

                  <div className="h-2" />

                  {/* Phase 3 */}
                  <div className="text-red-400 font-bold">[3/3] Finalizing setup</div>

                  <div className="h-2" />

                  {/* Success */}
                  <div>
                    <span className="text-cyan-400">🦞 </span>
                    <span className="text-cyan-400 font-bold">OpenClaw installed successfully!</span>
                  </div>
                  <div className="text-gray-500">
                    Finally unpacked. Now point me at your problems.
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
