import { ArrowRight, Monitor, Grid3X3 } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-bg">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-hero-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Radial glow accent */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-hero-foreground md:text-5xl lg:text-6xl">
            Documentation
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-hero-muted md:text-xl">
            Explore our guides to start with ArcBox.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/docs/desktop"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-5 py-3 text-sm font-medium transition-colors hover:bg-accent/90"
            >
              <Monitor className="h-4 w-4" />
              Get started with ArcBox Desktop
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {/* <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-fd-secondary text-fd-secondary-foreground px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-fd-secondary/80"
            >
              <Layers className="h-4 w-4" />
              Explore ArcBox Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link> */}
            <Link
              href="/docs/platform"
              className="group inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors"
            >
              <Grid3X3 className="h-4 w-4" />
              Explore ArcBox Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
