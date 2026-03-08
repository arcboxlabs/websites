import { Zap } from 'lucide-react';
import { ComparisonRow } from './comparison-row';

const comparisons = [
  {
    task: 'Container Startup',
    arcbox: 0.3,
    docker: 2.8,
    unit: 's'
  },
  {
    task: 'VM Boot Time',
    arcbox: 0.127,
    docker: 8.5,
    unit: 's'
  },
  {
    task: 'Memory Overhead',
    arcbox: 48,
    docker: 2048,
    unit: 'MB'
  },
  {
    task: 'Image Pull (cached)',
    arcbox: 0.8,
    docker: 3.2,
    unit: 's'
  }
];

export function SpeedComparison() {
  return (
    <section id="speed" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent">
            <Zap className="h-4 w-4" />
            <span>Performance</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ridiculously fast.
            <br />
            <span className="text-muted-foreground">By design.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            ArcBox Desktop is built from scratch for Apple Silicon. No
            emulation layers, no Rosetta, no compromises.
          </p>
        </div>

        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border bg-secondary/30 px-6 py-4 text-sm font-medium">
            <span className="text-muted-foreground">Benchmark</span>
            <span className="text-center text-accent">ArcBox Desktop</span>
            <span className="text-center text-muted-foreground">
              Docker Desktop
            </span>
          </div>

          {/* Comparison rows */}
          <div className="divide-y divide-border">
            {comparisons.map((item, index) => (
              <ComparisonRow
                key={item.task}
                task={item.task}
                arcbox={item.arcbox}
                docker={item.docker}
                unit={item.unit}
                index={index}
              />
            ))}
          </div>

          {/* Footer note */}
          <div className="border-t border-border bg-secondary/30 px-6 py-3 text-center text-xs text-muted-foreground">
            Benchmarks performed on M3 Max, 36GB RAM. Results may vary.
          </div>
        </div>
      </div>
    </section>
  );
}
