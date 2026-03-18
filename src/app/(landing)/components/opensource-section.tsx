import { Button } from '@/ui/button';
import clsx from 'clsx';
import { Github, Code2, GitCommitHorizontal, Users, TerminalSquare, FolderIcon, FileIcon } from 'lucide-react';

export function OpenSourceSection() {
  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
            <Github className="h-4 w-4" />
            <span>Open Source</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-foreground">Fully open-source.</span>

            <span className="hidden md:inline">{' '}</span>
            <br className="block md:hidden" />

            <span className="text-muted-foreground">
              Not just a README.
            </span>
          </h2>

        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="lg:basis-4/7 lg:shrink-0">
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              Some projects call themselves "open source" while only hosting a
              README, and a few screenshots on GitHub.{' '}
              <span className="text-foreground font-medium">
                That's not open source—that's a landing page.
              </span>
            </p>

            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {' '}ArcBox Desktop is{' '}
              <span className="text-foreground font-medium">
                truly open source
              </span>.
              {' '}Every line of code, every build script, every test—it's all on
              GitHub. Fork it, audit it, contribute to it.
            </p>

            {/* Stats/badges row */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {/* OSI Approved badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                <svg
                  viewBox="0 0 32 32"
                  className="h-5 w-5 text-accent"
                  fill="currentColor"
                >
                  <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 4c5.523 0 10 4.477 10 10 0 2.252-.744 4.33-2 6.004V16c0-4.418-3.582-8-8-8s-8 3.582-8 8v6.004A9.954 9.954 0 016 16c0-5.523 4.477-10 10-10zm0 6a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
                <span className="text-foreground font-medium">OSI Approved</span>
              </div>

              {/* License badge */}
              {
                ['MIT', 'Apache 2.0', 'AGPL 3.0'].map((license) => (
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm" key={license}>
                    <span className="text-foreground font-medium">{license}</span>
                  </div>
                ))
              }
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Code2,
                  title: 'Full source code',
                  desc: 'Not just binaries and a README'
                },
                {
                  icon: GitCommitHorizontal,
                  title: 'Actively maintained',
                  desc: 'Frequent commits, fast response'
                },
                {
                  icon: Users,
                  title: 'Open contributions',
                  desc: 'PRs welcome, community-driven'
                },
                {
                  icon: TerminalSquare,
                  title: 'Battery included',
                  desc: 'Tests, docs, and build scripts'
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl bg-secondary/60 border border-border/50 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                asChild
                className="h-11 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <a
                  href="https://github.com/arcboxlabs/arcbox-desktop"
                  target="_blank"
                  rel="noopener noreferrer external"
                >
                  <Github className="mr-2 h-4 w-4" />
                  arcboxlabs/arcbox-desktop
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="h-11 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <a
                  href="https://github.com/arcboxlabs/arcbox"
                  target="_blank"
                  rel="noopener noreferrer external"
                >
                  <Github className="mr-2 h-4 w-4" />
                  arcboxlabs/arcbox
                </a>
              </Button>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative w-full lg:basis-3/7 lg:min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              {/* GitHub-style header */}
              <a href="https://github.com/arcboxlabs/arcbox-desktop" target="_blank" rel="noopener noreferrer external">
                <div className="flex items-center gap-3 border-b border-border bg-secondary/80 px-6 py-4">
                  <Github className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">
                      arcboxlabs/arcbox-desktop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Public repository
                    </p>
                  </div>
                </div>
              </a>

              {/* Fake file tree */}
              <div className="bg-background/50 p-6">
                <div className="space-y-2 font-mono text-sm">
                  {[
                    { name: '.github/workflows/', type: 'folder', highlight: false },
                    { name: 'ArcBox.xcodeproj/', type: 'folder', highlight: false },
                    { name: 'ArcBox/', type: 'folder', highlight: true },
                    { name: 'ArcBoxHelper/', type: 'folder', highlight: true },
                    { name: 'ArcBoxTests/', type: 'folder', highlight: true },
                    { name: 'LaunchDaemons/', type: 'folder', highlight: true },
                    { name: 'Packages/', type: 'folder', highlight: true },
                    { name: 'scripts/', type: 'folder', highlight: true },
                    { name: '.gitignore', type: 'file', highlight: false },
                    { name: 'CHANGELOG.md', type: 'file', highlight: false },
                    { name: 'LICENSE', type: 'file', highlight: false },
                    { name: 'README.md', type: 'file', highlight: false }
                  ].map((item) => (
                    <div
                      key={item.name + '|' + item.type + '|' + item.highlight}
                      className={`flex items-center gap-2 ${
                        item.highlight
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.type === 'folder'
                        ? (
                          <FolderIcon className={clsx('h-4 w-4', item.highlight ? 'text-accent' : 'text-muted-foreground')} />
                        )
                        : (
                          <FileIcon className={clsx('h-4 w-4', item.highlight ? 'text-accent' : 'text-muted-foreground')} />
                        )}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>

                {/* Commit activity */}
                {/* <div className="mt-6 rounded-xl bg-secondary/50 p-4">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Recent activity
                  </p>
                  <div className="space-y-2">
                    {[
                      { msg: 'feat: add network isolation modes', time: '2h ago' },
                      { msg: 'fix: memory leak in vm cleanup', time: '5h ago' },
                      { msg: 'docs: update sandbox api reference', time: '1d ago' }
                    ].map((commit) => (
                      <div
                        key={commit.msg + '|' + commit.time}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground truncate max-w-[70%]">
                          {commit.msg}
                        </span>
                        <span className="text-xs text-muted-foreground/70">
                          {commit.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div> */}
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
