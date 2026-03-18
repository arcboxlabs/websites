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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 32 32"><path fill="currentColor" d="M14.96 8.51V4.49A2.49 2.49 0 0 0 12.47 2c-1.38 0-2.5 1.12-2.5 2.49l.01.01c0 .28.22.5.5.5s.5-.22.5-.5l-.01-.01a1.496 1.496 0 0 1 2.99 0v4.93l-1.18 1.43a9.45 9.45 0 0 0-2.064 3.857l-.646-.247c-.65-.25-1.09-.88-1.09-1.58V8.27h-.015h.005V4.32c0-1.12-.79-2.09-1.84-2.31a.39.39 0 0 0-.48.38v3.636a3 3 0 0 0-.18-.006h-.36c-.35 0-.62-.28-.62-.62V2.54a.543.543 0 0 0-.63-.53C3.24 2.31 2 3.78 2 5.49v3.22a4.29 4.29 0 0 0 3.981 4.279A4.72 4.72 0 0 0 8.99 17.26l1.437.549a9.5 9.5 0 0 0 .257 1.609l-.894-.238a.8.8 0 0 1-.55-.51l-.3-.88a.502.502 0 1 0-.95.33l.3.88c.19.56.66.99 1.23 1.15l1.5.4l.11.35H8.86c-.57 0-1.09-.27-1.41-.73l-.56-.87a.5.5 0 0 0-.69-.15a.5.5 0 0 0-.15.69l.57.89c.51.73 1.34 1.17 2.24 1.17h2.582l.121.388l-2.213.592c-.55.15-1.13.02-1.55-.34L7.2 22a.5.5 0 0 0-.7.03c-.18.2-.17.52.03.7l.62.56c.49.42 1.11.64 1.75.64c.24 0 .47-.03.71-.09l2.25-.602l.183.584l-.583.618c-.28.29-.67.46-1.08.46h-.91c-.28 0-.5.22-.5.5s.23.51.5.51h.92c.68 0 1.34-.28 1.8-.78l.196-.208l.35 1.122l-1.316 1.316c-.6.6-.6 1.58 0 2.18l.01.01c.6.6 1.58.6 2.18 0l.401-.401c.45.47 1.062.777 1.739.831a2.73 2.73 0 0 0 2.184-.826l.396.396c.6.6 1.58.6 2.18 0l.01-.01c.6-.6.6-1.58 0-2.18l-1.313-1.313l.33-1.054l.213.227c.46.5 1.12.78 1.8.78h.92c.27 0 .51-.23.51-.51s-.22-.5-.5-.5h-.92c-.41 0-.8-.17-1.08-.46l-.6-.636l.03-.094l-.009.009l.15-.48l2.279.61a2.73 2.73 0 0 0 2.46-.55l.62-.56c.2-.18.21-.5.03-.7s-.5-.21-.7-.03l-.6.54c-.42.36-1 .49-1.55.34l-2.243-.6l.121-.389h2.612c.9 0 1.73-.43 2.24-1.17l.57-.89a.5.5 0 0 0-.15-.69a.5.5 0 0 0-.69.15l-.56.87c-.32.46-.84.73-1.41.73h-2.3l.106-.342l1.534-.408c.57-.16 1.04-.59 1.23-1.15l.3-.88a.502.502 0 1 0-.95-.33l-.3.88c-.09.25-.29.44-.55.51l-.92.245a9.4 9.4 0 0 0 .286-1.696l1.464-.559a4.72 4.72 0 0 0 3.009-4.271A4.29 4.29 0 0 0 29.97 8.71V5.49c0-1.71-1.24-3.18-2.86-3.48a.543.543 0 0 0-.63.53V5.4c0 .34-.27.62-.62.62h-.36q-.09 0-.18.006V2.4c0-.11-.05-.21-.12-.28a.37.37 0 0 0-.36-.11C23.79 2.23 23 3.2 23 4.32v3.95h-.01v4.61c0 .7-.44 1.33-1.09 1.58l-.669.255A9.4 9.4 0 0 0 19.29 11l-1.32-1.594V4.49c0-.82.67-1.49 1.49-1.49s1.49.67 1.49 1.49l.01.01c0 .28.22.5.5.5s.5-.22.5-.5l-.01-.01c0-1.37-1.12-2.49-2.49-2.49s-2.49 1.12-2.49 2.49v4.016a2.24 2.24 0 0 0-2.01.005m0 3.878a.75.75 0 1 1-1.42.483a.75.75 0 0 1 1.42-.483m2.01.031a.75.75 0 1 1 1.44.422a.75.75 0 0 1-1.44-.422" /></svg>
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
