'use client';

import { clsx } from 'clsx';

export function ComparisonBars({
  arcbox,
  docker,
  unit,
  arcboxPct,
  arcboxDuration,
  dockerDuration,
  hasIntersected
}: {
  arcbox: number,
  docker: number,
  unit: string,
  arcboxPct: number,
  arcboxDuration: number,
  dockerDuration: number,
  hasIntersected: boolean
}) {
  return (
    <div className="w-full max-w-lg space-y-3 sm:space-y-6">
      {/* ArcBox */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-accent">
            ArcBox Desktop
          </span>
          <span className="font-mono text-sm font-bold text-accent">
            <span>
              {arcbox}
            </span>
            <span className="ml-1">
              {unit}
            </span>
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={clsx(
              'h-full rounded-full bg-accent',
              hasIntersected && 'animate-[bar-grow_ease-out_forwards]'
            )}
            style={{
              width: hasIntersected ? `${arcboxPct}%` : '0%',
              animationDuration: `${arcboxDuration}s`
            }}
          />
        </div>
      </div>

      {/* Docker */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Docker Desktop
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            <span>
              {docker}
            </span>
            <span className="ml-1">
              {unit}
            </span>
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={clsx(
              'h-full rounded-full bg-muted-foreground/50',
              hasIntersected && 'animate-[bar-grow_ease-out_forwards]'
            )}
            style={{
              width: hasIntersected ? '100%' : '0%',
              animationDuration: `${dockerDuration}s`
            }}
          />
        </div>
      </div>
    </div>
  );
}
