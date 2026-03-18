'use client';

import { useClipboard } from 'foxact/use-clipboard';
import { Check, Copy } from 'lucide-react';

export interface BrewSnippetCopyButtonProps {
  brewCommand: string
}

export default function BrewSnippetCopyButton({ brewCommand }: BrewSnippetCopyButtonProps) {
  const { copy, copied } = useClipboard({ timeout: 2000 });

  return (
    <button
      type="button"
      onClick={() => copy(brewCommand)}
      className="ml-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}
