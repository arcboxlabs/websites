import Image from 'next/image';
import { Box, Cpu, Shield, Zap, Layers, Lock } from 'lucide-react';
import { createFixedArray } from 'foxact/create-fixed-array';

export function FeatureCards() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            What can ArcBox do?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            The superpowers are{' '}
            <span className="text-accent">endless.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Card - Containers */}
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-500/90 to-orange-600/90 p-8 min-h-[400px] flex flex-col">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
              <Box className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Run containers
              <br />
              at lightning speed.
            </h3>
            <p className="text-white/80 text-base max-w-sm">
              Docker-compatible containers that start in milliseconds, not minutes. No bloated VMs, just pure native performance.
            </p>
            {/* Placeholder for screenshot */}
            <div className="mt-auto pt-8">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="aspect-[16/10] p-4">
                  <div className="h-full rounded-lg bg-black/30 p-4 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="h-4 w-16 rounded bg-white/20" />
                      <div className="h-4 w-24 rounded bg-white/10" />
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-2 mt-2">
                      {createFixedArray(4).map((i) => (
                        <div key={i} className="rounded bg-white/10 p-2">
                          <div className="h-3 w-12 rounded bg-white/20 mb-1" />
                          <div className="h-2 w-8 rounded bg-white/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card - Firecracker VMs — with background image */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl min-h-[200px] flex flex-col">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              alt="Server infrastructure"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-br from-rose-600/85 to-pink-700/75" />
            <div className="relative z-10 flex flex-col p-6 h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Firecracker microVMs.
              </h3>
              <p className="text-white/80 text-sm">
                Spin up lightweight VMs in under 125ms. Perfect for isolated workloads with minimal overhead.
              </p>
            </div>
          </div>

          {/* Small Card - Sandboxed — with background image */}
          <div className="group relative overflow-hidden rounded-3xl min-h-[180px] flex flex-col">
            <Image
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
              alt="Security sandbox"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-br from-violet-600/85 to-purple-700/75" />
            <div className="relative z-10 flex flex-col p-6 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                Sandboxed execution.
              </h3>
              <p className="text-white/70 text-sm">
                Run untrusted code safely in complete isolation.
              </p>
            </div>
          </div>

          {/* Small Card - Apple Silicon */}
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-sky-500/90 to-blue-600/90 p-6 min-h-[180px] flex flex-col">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-3">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              Apple Silicon native.
            </h3>
            <p className="text-white/70 text-sm">
              Built from scratch for M1, M2, M3, and M4 chips.
            </p>
          </div>

          {/* Medium Card - Dev Containers — with background image */}
          <div className="group relative overflow-hidden rounded-3xl min-h-[200px] flex flex-col">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
              alt="Development environment"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-br from-emerald-600/85 to-teal-700/75" />
            <div className="relative z-10 flex flex-col p-6 h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Dev Containers support.
              </h3>
              <p className="text-white/80 text-sm">
                Full devcontainer.json support for reproducible dev environments.
              </p>
            </div>
          </div>

          {/* Medium Card - Security */}
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-600/90 to-slate-800/90 p-6 min-h-[200px] flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm mb-4">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Security first.
            </h3>
            <p className="text-white/80 text-sm">
              Hardened by default. No network access unless you explicitly allow it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
