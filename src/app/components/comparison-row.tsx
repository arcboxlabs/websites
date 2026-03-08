'use client';

import { useIntersection } from 'foxact/use-intersection';

interface ComparisonRowProps {
  task: string,
  arcbox: number,
  docker: number,
  unit: string,
  index: number
}

export function ComparisonRow({
  task,
  arcbox,
  docker,
  unit,
  index
}: ComparisonRowProps) {
  const arcboxPercentage = 15;
  const dockerPercentage = Math.min((docker / docker) * 100, 100);
  const improvement = Math.round(docker / arcbox);
  const [setRef, hasIntersected] = useIntersection({ rootMargin: '0px' });

  return (
    <div ref={setRef} className="grid grid-cols-3 items-center px-6 py-6">
      <div>
        <span className="font-medium text-foreground">
          {task}
        </span>
        <span className="ml-2 rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
          {improvement}x faster
        </span>
      </div>

      {/* ArcBox bar */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-2 w-full max-w-32 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-accent transition-all duration-1000 ease-out"
            style={{
              width: hasIntersected ? `${arcboxPercentage}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          />
        </div>
        <span className="text-sm font-medium text-accent">
          {arcbox}
          {unit}
        </span>
      </div>

      {/* Docker bar */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-2 w-full max-w-32 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-muted-foreground/50 transition-all duration-1000 ease-out"
            style={{
              width: hasIntersected ? `${dockerPercentage}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          />
        </div>
        <span className="text-sm text-muted-foreground">
          {docker}
          {unit}
        </span>
      </div>
    </div>
  );
}
