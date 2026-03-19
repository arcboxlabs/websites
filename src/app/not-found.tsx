import Link from 'next/link';
import '@landing/styles/tailwind.css';
import '@landing/styles/global.css';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {/* Grid texture background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,oklch(0.7_0.16_45_/_0.05),transparent_70%)]" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-7 text-center">
        {/* Error badge */}
        <div className="inline-flex font-bold items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 font-mono text-sm text-destructive uppercase">
          <span>{'>_'}</span>
          <span>Error 404 | Not Found</span>
        </div>

        {/* 404 heading */}
        <h1 className="text-[8rem] font-bold leading-none tracking-tight md:text-[10rem]">
          <span className="text-foreground">4</span>
          <span className="text-accent">0</span>
          <span className="text-foreground">4</span>
        </h1>

        {/* Description */}
        <p className="text-pretty text-base text-muted-foreground">
          The requested endpoint does not exist in the system topology.
          <br />
          It may have been moved or decommissioned.
        </p>

        {/* Terminal card */}
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-card text-left">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-muted-foreground">arcbox — zsh</span>
          </div>

          {/* Terminal content */}
          <div className="space-y-1.5 bg-background/50 p-5 font-mono text-sm">
            <p className="text-accent">$ curl -I arcbox.dev/unknown</p>
            <p className="text-destructive">HTTP/2 404 Not Found</p>
            <p className="text-muted-foreground">
              <span className="text-foreground">server</span>:{' '}
              arcbox-edge</p>
            <p className="text-muted-foreground">
              <span className="text-foreground">x-powered-by</span>:{' '} ArcBox Platform</p>
          </div>
        </div>

        {/* CTA button */}
        <Link
          href="/"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent/90"
        >
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    </main>
  );
}
