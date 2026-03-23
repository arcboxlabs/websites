import Link from 'next/link';
import { Button } from '@/ui/button';
import { Download, ArrowRight, Apple } from 'lucide-react';
import BrewSnippetCopyButton from './brew-command';
import { HeroShader } from './hero-shader';
import HeroPreview from './hero-preview';

const BREW_COMMAND = 'brew install arcbox-desktop';

export function Hero() {
  return (
    <section className="relative px-4 pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        {/* Hero Card Container */}
        <div className="relative overflow-hidden rounded-4xl md:rounded-[2.5rem] border border-border bg-card min-h-[720px] sm:min-h-[600px] h-[70vh] max-h-[800px]">
          {/* Dithered icon shader — replaces arc dots */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden md:left-auto md:translate-x-0 md:right-0
          w-100 h-64 md:w-lg md:h-90"
          >
            <HeroShader />
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent" />

          {/* Content + Screenshot: stacked layout */}
          <div className="relative z-10 flex flex-col">

            {/* Top: headline + buttons */}
            <div className="px-4 xs:px-6 md:px-8 lg:px-12 pt-4 xs:pt-6 md:pt-8 lg:pt-12">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-accent">
                  <Apple className="h-4 w-4" />
                  <span>Built for Apple Silicon</span>
                </div>

                {/* Headline */}
                <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  Containers. VMs. Sandboxes.
                  <br />
                  <span className="text-accent font-bold">Without the chaos.</span>
                </h1>

                {/* Subheadline */}
                <p className="mt-4 text-pretty text-sm text-muted-foreground md:text-base">
                  The blazing-fast Docker Desktop alternative. Run containers at
                  lightning speed, spin up Firecracker VMs, and sandbox AI
                  agents—all in complete isolation.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-1.5 xs:gap-3">
                  <Button
                    size="default"
                    asChild
                    className="rounded-full bg-accent border-border hover:bg-accent/90 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
                  >
                    <Link href="#download">
                      <Download className="hidden xs:block h-4 w-4" />
                      Download for macOS
                    </Link>
                  </Button>

                  <div className="hidden md:inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-2 font-mono text-sm">
                    <span className="text-muted-foreground select-none">$</span>
                    <code className="text-foreground">{BREW_COMMAND}</code>
                    <BrewSnippetCopyButton brewCommand={BREW_COMMAND} />
                  </div>

                  <Button
                    variant="outline"
                    size="default"
                    asChild
                    className="rounded-full bg-secondary/60 border-border hover:bg-secondary/80 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
                  >
                    <Link
                      href="/docs"
                      // disable prefetch to docs
                      prefetch={false}
                    >
                      Learn More
                      <ArrowRight className="hidden xs:block h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <p className="mt-3 text-xs text-muted-foreground">
                  Requires macOS 15+ on Apple Silicon. Free forever for personal use. Business & commercial usage free during beta.
                </p>
              </div>
            </div>

            {/* Bottom: decorative grid left + screenshot right */}
            <div className="mt-8 flex items-end gap-0">

              {/* Bottom-left: orange accent grid fill */}
              <div className="shrink-0 w-12 md:w-[28%] lg:w-[30%] self-stretch relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, oklch(0.7 0.16 45 / 0.45) 1.5px, transparent 1.5px)',
                    backgroundSize: '22px 22px',
                    maskImage: 'linear-gradient(to top right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)'
                  }}
                />
              </div>

              {/* Bottom-right: screenshot cropped at bottom & right edges */}

              {/* Screenshot */}
              <HeroPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
