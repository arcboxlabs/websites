'use client';

import { useClipboard } from 'foxact/use-clipboard';
import { Check, Link2 } from 'lucide-react';
import { useCallback } from 'react';

export interface BlogAsideCopyPostUrlProps {
  fullUrl: string
}

export default function BlogAsideCopyPostUrl({ fullUrl }: BlogAsideCopyPostUrlProps) {
  const { copy, copied } = useClipboard({ timeout: 2000 });

  return (
    <button
      type="button"
      onClick={useCallback(() => copy(fullUrl), [copy, fullUrl])}
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
  );
}
