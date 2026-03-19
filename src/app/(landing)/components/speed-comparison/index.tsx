import { Zap } from 'lucide-react';
import { ScrollPlayer } from './scroll-player';

const features: FeatureData[] = [
  makeFeature(
    'Container Startup',
    'Starts containers in 0.3 seconds — 9x faster than Docker Desktop. No bloated VMs, just pure native speed.',
    0.3, 2.8, 's'
  ),
  makeFeature(
    'VM Boot Time',
    'Firecracker microVMs boot in just 127ms. No more waiting for slow VM initialization.',
    0.127, 8.5, 's'
  ),
  makeFeature(
    'Memory Overhead',
    'Only 48MB memory overhead compared to Docker\'s 2GB. More resources for your actual workloads.',
    48, 2048, 'MiB'
  ),
  makeFeature(
    'Image Pull',
    'Cached image pulls complete in under a second. Optimized layer caching and deduplication built in.',
    0.8, 3.2, 's'
  )
];

export function SpeedComparison() {
  return (
    <ScrollPlayer
      features={features}
      header={
        <div className="mb-4 px-4 text-center sm:mb-6 lg:mb-8">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent sm:mb-4">
            <Zap className="h-4 w-4" />
            <span>Performance</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            <span>Ridiculously fast.</span>
            <span className="hidden sm:inline">{' '}</span>
            <br className="block sm:hidden" />
            <span className="text-muted-foreground">By design.</span>
          </h2>
        </div>
      }
      leftDecoration={
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-40" />
        </div>
      }
      rightDecoration={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
      }
      footnote={
        <p className="text-center text-xs text-muted-foreground/60">
          Benchmarks on Apple Mac Mini, M4, 36GB RAM, as of Mar, 2026.
        </p>
      }
    />
  );
}

// ------------------------------------

export interface FeatureData {
  title: string,
  description: string,
  arcbox: number,
  docker: number,
  unit: string,
  /** Pre-calculated bar fill percentage for arcbox (arcbox/docker * 100) */
  arcboxPct: number,
  /** Pre-calculated CSS transition duration (seconds) for arcbox bar */
  arcboxDuration: number,
  /** Pre-calculated CSS transition duration (seconds) for docker bar */
  dockerDuration: number,
  /** Server-rendered metric title */
  metricTitle: React.ReactNode,
  /** Server-rendered improvement badge */
  improvementBadge: React.ReactNode
}

/**
 * Returns a CSS transition duration for the bar fill.
 * For time-based metrics (unit 's'), uses the actual value (capped at 30s, min 0.2s).
 * For non-time metrics, scales proportionally.
 */
function getBarDuration(value: number, unit: string): number {
  if (unit === 's') {
    return Math.min(Math.max(value, 0.2), 30);
  }
  return Math.min(Math.max(value / 700, 0.3), 6);
}

function makeFeature(
  title: string,
  description: string,
  arcbox: number,
  docker: number,
  unit: string
): FeatureData {
  const improvement = Math.round(docker / arcbox);
  return {
    title,
    description,
    arcbox,
    docker,
    unit,
    arcboxPct: Math.round((arcbox / docker) * 100),
    arcboxDuration: getBarDuration(arcbox, unit),
    dockerDuration: getBarDuration(docker, unit),
    metricTitle: (
      <div className="hidden xs:block text-center">
        <span className="font-mono text-sm text-muted-foreground">
          Benchmark
        </span>
        <h3 className="mt-1 text-xl font-bold text-foreground lg:text-2xl">
          {title}
        </h3>
      </div>
    ),
    improvementBadge: (
      <div className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
        <span className="font-mono text-lg lg:text-xl font-bold text-accent">
          {improvement}x
        </span>
        <span className="ml-1 text-sm lg:text-base text-accent/80">faster</span>
      </div>
    )
  };
}
