'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error & { digest?: string },
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="text-fd-muted-foreground">
        An unexpected error occurred. The error has been reported automatically.
      </p>
      <button
        onClick={reset}
        type="button"
        className="rounded-lg border border-fd-border bg-fd-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent"
      >
        Try again
      </button>
    </div>
  );
}
