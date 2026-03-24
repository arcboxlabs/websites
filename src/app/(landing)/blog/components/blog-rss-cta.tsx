import { Rss } from 'lucide-react';
import { Button } from '@/ui/button';

export function BlogRssCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-b from-secondary to-card">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/5" />

      <div className="relative text-center p-4 md:p-6">
        {/* RSS Icon badge */}
        {/* <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-2xl border border-accent/30 bg-accent/10">
              <Rss className="h-7 w-7 text-accent" />
            </div> */}

        <h2 className="mb-3 text-2xl md:text-3xl font-bold tracking-tight text-foreground text-balance">
          Stay in the loop<span className="text-accent">.</span>
        </h2>

        <p className="mx-auto mb-2 text-sm md:text-base text-foreground/80">
          No newsletter. No inbox noise. Just pure RSS — the way the open web intended.
        </p>
        <p className="mx-auto mb-6 text-xs md:text-sm text-muted-foreground text-pretty">
          Who do you think we are, some spam-sending company?
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-3">
          <Button
            size="default"
            asChild
            className="rounded-full bg-accent border-border hover:bg-accent/90 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
          >
            <a href="/atom.xml" target="_blank" rel="noopener noreferrer">
              <Rss className="h-4 w-4" />
              Atom Feed
            </a>
          </Button>
          <Button
            variant="outline"
            size="default"
            asChild
            className="rounded-full bg-secondary/60 border-border hover:bg-secondary/80 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
          >
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS 2.0
            </a>
          </Button>
          <Button
            variant="outline"
            size="default"
            asChild
            className="rounded-full bg-secondary/60 border-border hover:bg-secondary/80 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
          >
            <a href="/rss.json" target="_blank" rel="noopener noreferrer">
              JSON Feed
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
