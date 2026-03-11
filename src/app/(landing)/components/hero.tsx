import Link from 'next/link';
import { Button } from '@/ui/button';
import { Download, ArrowRight, Apple } from 'lucide-react';
import { createFixedArray } from 'foxact/create-fixed-array';

export function Hero() {
  return (
    <section className="relative px-4 pt-28 pb-12 md:px-6 md:pt-32 md:pb-16 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        {/* Hero Card Container */}
        <div className="relative overflow-hidden rounded-4xl md:rounded-[2.5rem] border border-border bg-card">
          {/* Grid texture background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Decorative arc pattern - reflecting logo */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12 lg:top-16 lg:right-20">
            <svg
              width="320"
              height="200"
              viewBox="0 0 320 200"
              className="text-accent opacity-30 hidden md:block"
            >
              {/* Dotted arc pattern like the logo */}
              {createFixedArray(12).map((rowIndex) => {
                const radius = 80 + rowIndex * 12;
                const dots = Math.floor(radius * 0.3);
                return createFixedArray(dots).map((dotIndex) => {
                  const angle = (Math.PI * dotIndex) / (dots - 1);
                  const x = 160 + radius * Math.cos(angle);
                  const y = 180 - radius * Math.sin(angle);
                  const opacity = 1 - rowIndex * 0.06;
                  return (
                    <circle
                      key={`${rowIndex}-${dotIndex}`}
                      cx={x}
                      cy={y}
                      r={2.5 - rowIndex * 0.1}
                      fill="currentColor"
                      opacity={opacity}
                    />
                  );
                });
              })}
            </svg>
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent" />

          {/* Content + Screenshot: stacked layout */}
          <div className="relative z-10 flex flex-col">

            {/* Top: headline + buttons */}
            <div className="px-6 pt-10 md:px-12 md:pt-14 lg:px-16 lg:pt-16">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                  <Apple className="h-4 w-4" />
                  <span>Built for Apple Silicon</span>
                </div>

                {/* Headline */}
                <h1 className="text-balance text-3xl font-black tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  Containers. VMs. Sandboxes.
                  <br />
                  <span className="text-accent font-black">Without the chaos.</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-4 text-pretty text-sm text-muted-foreground md:text-base">
                  The blazing-fast Docker Desktop alternative. Run containers at
                  lightning speed, spin up Firecracker VMs, and sandbox AI
                  agents—all in complete isolation.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    size="lg"
                    asChild
                    className="h-10 rounded-full bg-accent px-6 text-primary-foreground hover:bg-accent/90"
                  >
                    <Link href="#download">
                      <Download className="mr-2 h-4 w-4" />
                      Download for macOS
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="h-10 rounded-full px-6 bg-transparent border-border hover:bg-secondary"
                  >
                    <Link href="/docs">
                      Quick Start
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <p className="mt-3 text-xs text-muted-foreground">
                  Requires macOS 14+ on Apple Silicon
                </p>
              </div>
            </div>

            {/* Bottom: decorative grid left + screenshot right */}
            <div className="mt-8 flex items-end gap-0">

              {/* Bottom-left: orange accent grid fill */}
              <div className="shrink-0 w-12 md:w-[28%] lg:w-[30%] self-stretch relative overflow-hidden">
                {/* Orange dot/grid texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, oklch(0.7 0.16 45 / 0.35) 1.5px, transparent 1.5px)',
                    backgroundSize: '22px 22px',
                    maskImage: 'linear-gradient(to top right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
                  }}
                />
              </div>

              {/* Bottom-right: screenshot cropped at bottom & right edges */}
              <div className="flex-1 md:w-[72%] lg:w-[70%] overflow-hidden rounded-tl-2xl border-t border-l border-border/60 shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-4 py-2.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-muted-foreground">
                    ArcBox Desktop
                  </span>
                </div>

                {/* App UI placeholder */}
                <div className="bg-linear-to-br from-background via-card to-background p-4 md:p-5">
                  <div className="flex h-55 md:h-65 gap-3">
                    {/* Sidebar */}
                    <div className="flex w-36 md:w-44 flex-col gap-2 rounded-xl bg-secondary/60 p-3">
                      <div className="h-6 w-full rounded-lg bg-accent/25" />
                      <div className="h-4 w-3/4 rounded-md bg-muted/50" />
                      <div className="h-4 w-full rounded-md bg-muted/50" />
                      <div className="h-4 w-2/3 rounded-md bg-muted/50" />
                      <div className="h-4 w-full rounded-md bg-muted/30" />
                      <div className="h-4 w-4/5 rounded-md bg-muted/30" />
                      <div className="mt-auto h-4 w-1/2 rounded-md bg-muted/20" />
                    </div>
                    {/* Main content */}
                    <div className="flex-1 rounded-xl bg-secondary/50 p-3 md:p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="h-5 w-20 rounded-md bg-accent/20" />
                          <div className="h-5 w-14 rounded-md bg-muted/30" />
                        </div>
                        <div className="h-5 w-24 rounded-full bg-muted/20" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 md:gap-3">
                        {createFixedArray(6).map((i) => (
                          <div
                            key={i}
                            className="rounded-lg bg-muted/20 p-2.5"
                          >
                            <div className="h-7 w-7 rounded-md bg-accent/15 mb-2" />
                            <div className="h-2.5 w-3/4 rounded bg-muted/50 mb-1" />
                            <div className="h-2 w-1/2 rounded bg-muted/30" />
                          </div>
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
