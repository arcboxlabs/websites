'use client';

import type { ReactNode } from 'react';
import { AnchorProvider, ScrollProvider, TOCItem } from 'fumadocs-core/toc';
import { useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Link2, Check } from 'lucide-react';
import { useClipboard } from 'foxact/use-clipboard';

interface TocItem {
  url: string,
  title: ReactNode,
  depth: number
}

interface BlogAsideProps {
  toc: TocItem[],
  fullUrl: string
}

export function BlogAside({ toc, fullUrl }: BlogAsideProps) {
  const containerRef = useRef<HTMLUListElement>(null);

  const { copy, copied } = useClipboard({ timeout: 2000 });

  const handleClick = useCallback(() => {
    copy(fullUrl);
  }, [copy, fullUrl]);

  return (
    <aside className="hidden w-56 shrink-0 xl:block">
      <div className="sticky top-22 pt-1">
        {/* ToC */}
        {toc.length > 0 && (
          <div>
            <p className="mb-3 text-base font-semibold uppercase tracking-widest text-muted-foreground">
              On this page
            </p>
            <AnchorProvider toc={toc} single>
              <ul ref={containerRef} className="space-y-1">
                <ScrollProvider containerRef={containerRef}>
                  {toc.map((item) => (
                    <li key={item.url}>
                      <TOCItem
                        href={item.url}
                        className={cn(
                          'block rounded py-1 text-sm leading-snug transition-colors',
                          'data-[active=false]:text-muted-foreground hover:text-foreground',
                          'data-[active=true]:text-accent'
                        )}
                      >
                        {item.title}
                      </TOCItem>
                    </li>
                  ))}
                </ScrollProvider>
              </ul>
            </AnchorProvider>
          </div>
        )}

        {/* Share */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-3 text-base font-semibold uppercase tracking-widest text-muted-foreground">
            Share
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            {copied
              ? (
                <Check className="h-3.5 w-3.5 text-accent" />
              )
              : (
                <Link2 className="h-3.5 w-3.5" />
              )}
            {copied ? 'Copied!' : 'Copy link'}
          </button>
        </div>
      </div>
    </aside>
  );
}
