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
  return <ScrollPlayer features={features} />;
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
  /** Pre-calculated improvement multiplier (docker/arcbox, rounded) */
  improvement: number
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
  return {
    title,
    description,
    arcbox,
    docker,
    unit,
    arcboxPct: Math.round((arcbox / docker) * 100),
    arcboxDuration: getBarDuration(arcbox, unit),
    dockerDuration: getBarDuration(docker, unit),
    improvement: Math.round(docker / arcbox)
  };
}
