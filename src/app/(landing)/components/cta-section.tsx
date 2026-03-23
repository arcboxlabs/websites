import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { createFixedArray } from 'foxact/create-fixed-array';
import { cn } from '@/lib/utils';
import heroPreview from '@/images/hero-preview.png';

export interface CTASectionProps extends Omit<React.ComponentProps<'section'>, 'children'> {}

export function CTASection({ className, ...props }: CTASectionProps) {
  return (
    <section className={cn('relative py-24 md:py-32 overflow-hidden px-4', className)} {...props}>
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-b from-secondary to-card">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/5" />

          <div className="relative text-center px-4 sm:px-8 md:px-16 pt-8 sm:pt-16 md:pt-20 pb-8">
            <p className="text-sm text-muted-foreground mb-3">
              That's all. Except not.
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Ready to switch to
              <br />
              <span className="text-accent">ArcBox Desktop?</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base text-muted-foreground">
              Faster and lighter, built for the way you actually work
            </p>

            <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-3">
              <Button
                size="default"
                asChild
                className="rounded-full bg-accent border-border hover:bg-accent/90 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
              >
                <Link href="https://github.com/arcbox/releases" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download for macOS
                </Link>
              </Button>
              <Button
                variant="outline"
                size="default"
                asChild
                className="rounded-full bg-secondary/60 border-border hover:bg-secondary/80 h-8 gap-1.5 px-2.5 md:h-10 md:px-4"
              >
                <Link
                  href="/docs"
                  // disable prefetch to docs
                  prefetch={false}
                >
                  Learn More
                  <ArrowRight className="hidden xs:block h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Requires macOS 15+ on Apple Silicon. Free forever for personal use. Business & commercial usage free during beta.
            </p>

            {/* Floating Screenshots */}
            <div className="relative mt-16 h-56 xs:h-64 sm:h-72 md:h-100 lg:h-112">
              {/* Center screenshot - main */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[85%] md:w-[65%] z-20">
                <Image
                  src={heroPreview}
                  alt="ArcBox Desktop screenshot"
                  className="w-full rounded-md border-3 border-border shadow-2xl"
                  placeholder="blur"
                  priority={false}
                />
              </div>

              {/* Left screenshot - tilted */}
              <div className="absolute left-0 top-16 md:top-24 w-[60%] md:w-[45%] z-10 -rotate-6 opacity-80">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                  <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-[10px] text-muted-foreground">
                      Terminal
                    </span>
                  </div>
                  <div className="aspect-[4/3] md:aspect-[16/10] bg-background p-3 text-left overflow-hidden">
                    <div className="font-mono text-[6px] md:text-[8px] text-muted-foreground space-y-0.5">
                      <p><span className="text-accent">$</span> <span className="text-accent">docker-compose up -d</span></p>
                      <br />
                      <p className="text-blue-400">[+] Running 9/9</p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-rabbitmq</span>    <span className="text-green-400">Started</span>  <span className="text-blue-400">1.7s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-clickhouse</span>  <span className="text-green-400">Started</span>  <span className="text-blue-400">1.1s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-minio</span>       <span className="text-green-400">Healthy</span> <span className="text-blue-400">12.1s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-postgres</span>    <span className="text-green-400">Started</span>  <span className="text-blue-400">1.9s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-redis</span>       <span className="text-green-400">Started</span>  <span className="text-blue-400">1.3s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-minio-init</span>  <span className="text-green-400">Started</span> <span className="text-blue-400">12.6s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-grafana</span>     <span className="text-green-400">Started</span>  <span className="text-blue-400">2.2s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-nginx</span>       <span className="text-green-400">Started</span>  <span className="text-blue-400">3.1s</span></p>
                      <p><span className="text-green-400"> ✔</span> <span>Container</span> <span className="text-semibold">arcbox-envoy</span>       <span className="text-green-400">Started</span>  <span className="text-blue-400">3.8s</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right screenshot - tilted */}
              <div className="absolute right-0 md:right-[5%] top-20 md:top-28 w-[45%] md:w-[35%] z-10 rotate-6 opacity-80">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
                  <div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <div className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <div className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-[10px] text-muted-foreground">
                      Sandbox
                    </span>
                  </div>
                  <div className="aspect-[4/3] bg-linear-to-br from-violet-500/20 to-purple-600/20 p-3">
                    <div className="h-full rounded-lg bg-black/20 p-2">
                      <div className="h-3 w-16 rounded bg-white/20 mb-2" />
                      <div className="space-y-1">
                        {createFixedArray(3).map((i) => (
                          <div key={i} className="h-2 w-full rounded bg-white/10" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
