'use client';

import { clsx } from 'clsx';
import { useIntersection } from 'foxact/use-intersection';

export interface ComparisonBarsProps {
  arcbox: number,
  docker: number,
  unit: string,
  arcboxPct: number,
  arcboxDuration: number,
  dockerDuration: number
}

export function ComparisonBars({
  arcbox,
  docker,
  unit,
  arcboxPct,
  arcboxDuration,
  dockerDuration
}: ComparisonBarsProps) {
  const [setIntersectionRef, hasIntersected] = useIntersection({ rootMargin: '0px' });

  return (
    <div className="w-full max-w-lg space-y-3 sm:space-y-6">
      {/* ArcBox */}
      <Bar
        label="ArcBox Desktop"
        value={arcbox}
        unit={unit}
        fillPct={arcboxPct}
        bgColorClass="bg-accent"
        animationDuration={arcboxDuration}
        ref={setIntersectionRef}
        hasIntersected={hasIntersected}
      />

      {/* Docker */}
      <Bar
        label="Docker Desktop"
        value={docker}
        unit={unit}
        fillPct={100}
        bgColorClass="bg-muted-foreground/50"
        animationDuration={dockerDuration}
        hasIntersected={hasIntersected}
      />
    </div>
  );
}

interface BarProps {
  label: string,
  value: number,
  unit: string,
  fillPct: number,
  bgColorClass: string,
  animationDuration: number,
  ref?: React.Ref<HTMLDivElement>,
  hasIntersected: boolean
}

function Bar({ label, value, unit, fillPct, bgColorClass, animationDuration, ref, hasIntersected }: BarProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
        <span className="font-mono text-sm text-muted-foreground">
          <span>
            {value}
          </span>
          <span className="ml-1">
            {unit}
          </span>
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary" ref={ref}>
        <div
          className={clsx(
            // add delay-100, wait for scroll into view a bit
            'delay-100 h-full rounded-full',
            bgColorClass,
            hasIntersected && 'animate-[bar-grow_ease-out_forwards]'
          )}
          style={{
            width: hasIntersected ? `${fillPct}%` : '0%',
            animationDuration: `${animationDuration}s`
          }}
        />
      </div>
    </div>
  );
}
