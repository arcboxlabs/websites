import { Shield, Lock, Eye, Terminal } from 'lucide-react';

export function AIIsolationSection() {
  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
                <Shield className="h-4 w-4" />
                <span>AI Agent Runtime</span>
              </div>
              <span className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500">
                Coming Soon
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Run AI agents locally.
              <br />
              <span className="text-muted-foreground">
                Fully isolated from your system.
              </span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              AI agents are powerful—and unpredictable. ArcBox Desktop runs your
              local agents in fully isolated Firecracker microVMs, so they can
              do their work without ever touching your host machine.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Lock,
                  title: 'No host access',
                  desc: 'Agents run inside their own microVM with a strict boundary between the sandbox and your system.'
                },
                {
                  icon: Eye,
                  title: 'Full observability',
                  desc: 'Watch every syscall, network request, and file write as it happens in real-time.'
                },
                {
                  icon: Terminal,
                  title: 'Instant spin-up',
                  desc: 'Spin up a fully isolated agent environment in under 125ms with a single command.'
                }
              ].map((item) => (
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
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-4 text-sm text-muted-foreground">
                  arcbox sandbox
                </span>
              </div>

              {/* Terminal content */}
              <div className="bg-background/50 p-6 font-mono text-sm">
                <div className="space-y-1">
                  <p className="text-accent">$ arcbox sandbox create openclaw</p>
                  <p className="text-muted-foreground">
                    Creating isolated Firecracker VM...
                  </p>
                  <p className="text-muted-foreground">
                    ├─ Memory: 2GB allocated
                  </p>
                  <p className="text-muted-foreground">
                    ├─ Network: Isolated bridge
                  </p>
                  <p className="text-muted-foreground">
                    ├─ Filesystem: Read-only rootfs
                  </p>
                  <p className="text-muted-foreground">
                    └─ Security: Full syscall filtering
                  </p>
                  <br />
                  <p className="text-green-400 mb-0">
                    ✓ Sandbox ready in 127ms
                  </p>
                  <br />
                  <p className="text-accent mb-0">
                    $ arcbox sandbox exec openclaw --prompt "analyze codebase"
                  </p>
                  <p className="text-muted-foreground">
                    Running in isolated environment...
                  </p>
                  <p className="animate-pulse text-accent">▊</p>
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
