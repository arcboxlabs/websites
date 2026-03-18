'use client';

import { AnchorProvider, ScrollProvider, TOCItem } from 'fumadocs-core/toc';
import type { TOCItemType } from 'fumadocs-core/toc';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

export interface BlogAsideTocProps {
  toc: TOCItemType[]
}

export default function BlogAsideToc({ toc }: BlogAsideTocProps) {
  const containerRef = useRef<HTMLUListElement>(null);

  return (
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
  );
}
