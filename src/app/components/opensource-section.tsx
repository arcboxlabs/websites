import Link from 'next/link';
import { Button } from '@/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function OpenSourceSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
              <Github className="h-4 w-4" />
              <span>Open Source</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Fully open-source.
              <br />
              <span className="text-muted-foreground">Not just a README.</span>
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Some projects call themselves "open source" while only hosting a
                README, a few screenshots, and an issue template on GitHub.{' '}
                <span className="text-foreground font-medium">
                  That's not open source—that's a landing page.
                </span>
              </p>
              <p className="text-lg leading-relaxed">
                ArcBox Desktop is{' '}
                <span className="text-foreground font-medium">
                  truly open source
                </span>.
                {' '}
                Every line of code, every build script, every test—it's all on
                GitHub. Fork it, audit it, contribute to it.
              </p>
            </div>

            {/* Stats/badges row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* MIT License badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="text-foreground font-medium">MIT License</span>
              </div>

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

              {/* GitHub stars placeholder */}
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-accent"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-foreground font-medium">2.4k Stars</span>
              </div>
            </div>

            {/* Key points */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Full source code</p>
                  <p className="text-sm text-muted-foreground">
                    Not just binaries or a README
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Actively maintained</p>
                  <p className="text-sm text-muted-foreground">
                    Weekly commits, fast issue response
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Open contributions</p>
                  <p className="text-sm text-muted-foreground">
                    PRs welcome, community-driven
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Battery included</p>
                  <p className="text-sm text-muted-foreground">
                    Tests, docs, and build scripts
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                asChild
                className="h-11 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                <Link
                  href="https://github.com/arcbox-dev/arcbox-desktop"
                  target="_blank"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-11 rounded-full px-6 border-border"
              >
                <Link
                  href="https://github.com/arcbox-dev/arcbox-desktop/blob/main/CONTRIBUTING.md"
                  target="_blank"
                >
                  Contribute
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Visual card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
              {/* GitHub-style header */}
              <div className="border-b border-border bg-secondary/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Github className="h-6 w-6 text-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">
                      arcbox-dev/arcbox-desktop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Public repository
                    </p>
                  </div>
                </div>
              </div>

              {/* Fake file tree */}
              <div className="p-6">
                <div className="space-y-2 font-mono text-sm">
                  {[
                    { name: 'src/', type: 'folder', highlight: true },
                    { name: '  core/', type: 'folder', highlight: true },
                    { name: '  vm/', type: 'folder', highlight: true },
                    { name: '  sandbox/', type: 'folder', highlight: true },
                    { name: '  container/', type: 'folder', highlight: true },
                    { name: 'tests/', type: 'folder', highlight: true },
                    { name: 'docs/', type: 'folder', highlight: true },
                    { name: '.github/', type: 'folder', highlight: false },
                    { name: 'Cargo.toml', type: 'file', highlight: true },
                    { name: 'build.rs', type: 'file', highlight: true },
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
                          <svg
                            viewBox="0 0 24 24"
                            className={`h-4 w-4 ${
                              item.highlight ? 'text-accent' : 'text-muted-foreground'
                            }`}
                            fill="currentColor"
                          >
                            <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
                          </svg>
                        )
                        : (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-muted-foreground"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <path d="M14 2v6h6" />
                          </svg>
                        )}
                      <span>{item.name}</span>
                      {item.highlight && item.type === 'folder' && (
                        <span className="ml-auto text-xs text-accent">
                          real code
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Commit activity */}
                <div className="mt-6 rounded-xl bg-secondary/50 p-4">
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
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-4xl bg-accent/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
