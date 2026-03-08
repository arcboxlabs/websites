import Link from 'next/link';
import { Button } from '@/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { createFixedArray } from 'foxact/create-fixed-array';
import { cn } from '@/lib/utils';

export interface CTASectionProps extends Omit<React.ComponentProps<'section'>, 'children'> {}

export function CTASection({ className, ...props }: CTASectionProps) {
  return (
    <section className={cn('relative py-24 md:py-32 overflow-hidden px-4', className)} {...props}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-b from-secondary to-card">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/5" />

          <div className="relative px-8 pt-16 pb-8 text-center md:px-16 md:pt-20">
            <p className="text-sm text-muted-foreground mb-3">
              That's all. Except not.
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Ready to ditch
              <br />
              <span className="text-accent">Docker Desktop?</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base text-muted-foreground">
              Join thousands of developers who switched to something faster, lighter, and built for the way they actually work.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="h-12 rounded-full bg-accent px-8 text-primary-foreground hover:bg-accent/90"
              >
                <Link href="https://github.com/arcbox/releases" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download for macOS
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-12 rounded-full px-8"
              >
                <Link href="https://docs.arcbox.dev" target="_blank">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Free for personal use. Pro plans available for teams.
            </p>

            {/* Floating Screenshots */}
            <div className="relative mt-16 h-[350px] md:h-[450px]">
              {/* Center screenshot - main */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[85%] md:w-[65%] z-20">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-3 py-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs text-muted-foreground">
                      ArcBox - Containers
                    </span>
                  </div>
                  <div className="aspect-[16/10] bg-linear-to-br from-background via-secondary to-background p-4">
                    <div className="flex h-full gap-3">
                      <div className="w-40 rounded-lg bg-muted/30 p-3">
                        <div className="h-5 w-full rounded bg-accent/20 mb-2" />
                        <div className="space-y-1.5">
                          {createFixedArray(4).map((i) => (
                            <div key={i} className="h-4 w-full rounded bg-muted/50" />
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 rounded-lg bg-muted/30 p-3">
                        <div className="grid grid-cols-3 gap-2">
                          {createFixedArray(6).map((i) => (
                            <div key={i} className="aspect-square rounded-lg bg-muted/50 p-2">
                              <div className="h-4 w-4 rounded bg-accent/30 mb-1" />
                              <div className="h-2 w-3/4 rounded bg-muted/60" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left screenshot - tilted */}
              <div className="absolute left-0 md:left-[5%] top-16 md:top-24 w-[45%] md:w-[35%] z-10 -rotate-6 opacity-80">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                  <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-[10px] text-muted-foreground">
                      Terminal
                    </span>
                  </div>
                  <div className="aspect-[4/3] bg-background p-3">
                    <div className="font-mono text-[8px] md:text-[10px] text-muted-foreground space-y-1">
                      <p><span className="text-accent">$</span> arcbox run nginx</p>
                      <p className="text-foreground/60">Starting container...</p>
                      <p className="text-foreground/60">Ready in 47ms</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right screenshot - tilted */}
              <div className="absolute right-0 md:right-[5%] top-20 md:top-28 w-[45%] md:w-[35%] z-10 rotate-6 opacity-80">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                  <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-[10px] text-muted-foreground">
                      Sandbox
                    </span>
                  </div>
                  <div className="aspect-[4/3] bg-linear-to-br from-violet-500/20 to-purple-600/20 p-3">
                    <div className="h-full rounded-lg bg-black/20 p-2">
                      <div className="h-3 w-16 rounded bg-white/20 mb-2" />
                      <div className="space-y-1">
                        {createFixedArray(3).map((i) => (
                          <div key={i} className="h-2 w-full rounded bg-white/10" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
