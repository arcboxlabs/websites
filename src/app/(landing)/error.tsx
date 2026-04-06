'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-7 text-center">
        <div className="inline-flex font-bold items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 font-mono text-sm text-destructive uppercase">
          <span>{'>_'}</span>
          <span>Runtime Error</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Something went wrong
        </h1>

        <p className="text-pretty text-base text-muted-foreground">
          An unexpected error occurred. The error has been reported automatically.
        </p>

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-secondary px-4 text-sm font-semibold transition-colors hover:bg-secondary/80"
          >
            <RotateCcw size={16} />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent/90"
          >
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
