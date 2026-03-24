'use client';

import { useGSAP } from '@gsap/react';
import _gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ComparisonBars } from './comparison-bars';
import type { FeatureData } from './index';

_gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export function ScrollPlayer({
  features
}: {
  features: FeatureData[]
}) {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const isScrollingRef = useRef(false);

  const activeData = features[activeFeature];

  useGSAP(
    () => {
      if (!sectionRef.current || !triggerRef.current) return;

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: `+=${features.length * 75}%`,
        pin: sectionRef.current,
        scrub: 0.5,
        onUpdate(self) {
          if (isScrollingRef.current) return;
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * features.length),
            features.length - 1
          );
          setActiveFeature(newIndex);
        }
      });

      // The CSS min-height on triggerRef reserved space matching the
      // pin-spacer, preventing browser scroll restoration from clamping.
      // Now that the pin-spacer provides the real height, remove min-height.
      triggerRef.current.style.minHeight = '';
    },
    { scope: triggerRef }
  );

  const scrollToFeature = (index: number) => {
    if (!scrollTriggerRef.current) return;

    setActiveFeature(index);
    isScrollingRef.current = true;

    const targetProgress = (index + 0.5) / features.length;
    const scrollStart = scrollTriggerRef.current.start;
    const scrollEnd = scrollTriggerRef.current.end;
    const targetScroll =
      scrollStart + (scrollEnd - scrollStart) * targetProgress;

    _gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: 0,
      ease: 'power2.inOut',
      onComplete() {
        isScrollingRef.current = false;
      }
    });
  };

  return (
    <div
      ref={triggerRef}
      // Reserve space matching the GSAP pin-spacer height so the document
      // has the correct height before JS hydrates. This prevents the browser
      // from clamping the restored scroll position to a shorter document.
      // pin-spacer height = section (100dvh) + scroll distance (n * 75dvh).
      style={{ minHeight: `${100 + features.length * 75}dvh` }}
    >
      <div ref={sectionRef}>
        <div className="h-dvh pt-22.5">
          <div
            className="flex items-center justify-center flex-col relative z-10 w-full lg:min-h-100 lg:max-h-200 h-full"
          >
            <div className="mb-4 px-4 text-center sm:mb-6 lg:mb-8">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-accent sm:mb-4">
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

            {/* Full-width wrapper: textures behind, content centered */}
            <div className="relative w-full lg:h-[calc(100%-16rem)] lg:flex-row">
              {/* Full-bleed texture layers */}
              <div className="pointer-events-none absolute inset-0 lg:flex">
                <div className="relative hidden shrink-0 lg:block lg:w-[45%]">
                  <div className="pointer-events-none absolute inset-0 hidden lg:block">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-40" />
                  </div>
                </div>
                <div className="relative hidden grow lg:block">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-size-[16px_16px] opacity-50" />
                </div>
              </div>

              {/* Centered content */}
              <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col border-border lg:flex-row">
                {/* Left: Feature list */}
                <div className="relative flex shrink-0 items-center border-t border-b border-border lg:w-[45%] lg:border-t-0 lg:border-b-0 lg:border-r lg:border-border">
                  <ul className="relative z-10 w-full">
                    {features.map((feature, idx) => {
                      const isActive = idx === activeFeature;

                      return (
                        <li
                          key={feature.title + '|' + feature.description}
                          className={cn(
                            'relative flex cursor-pointer gap-3 border-b border-border px-4 py-2.5 leading-[140%] transition-all duration-300 last:border-b-0 sm:gap-4 sm:p-4 lg:border-b-0 lg:p-6',
                            isActive ? 'items-start' : 'items-center'
                          )}
                          onClick={() => scrollToFeature(idx)}
                        >
                          {/** Active Indicator */}
                          {isActive && (
                            <div className="absolute -right-px hidden h-9 w-0.5 origin-center transform-none bg-accent lg:block" />
                          )}

                          <div className="min-w-0">
                            <h3
                              className={cn(
                                'font-medium text-foreground transition-all duration-300',
                                'text-base sm:text-lg md:text-xl lg:text-2xl',
                                isActive && 'font-bold text-accent lg:text-3xl'
                              )}
                            >
                              {feature.title}
                            </h3>

                            <div
                              className={cn(
                                'grid transition-all duration-300 ease-in-out',
                                isActive
                                  ? 'grid-rows-[1fr] opacity-100'
                                  : 'grid-rows-[0fr] opacity-0'
                              )}
                            >
                              <p className={cn(
                                'overflow-hidden text-sm text-muted-foreground md:text-base lg:max-w-sm',
                                isActive && 'pt-1 xs:pt-2 sm:pt-3'
                              )}
                              >
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Right: Speed comparison visualization */}
                <div className="relative flex grow flex-col overflow-hidden">
                  <div className="relative z-10 flex flex-col items-center justify-center gap-4 p-4 xs:gap-6 sm:gap-8 sm:p-6 md:grow lg:gap-10 lg:p-10">
                    <div className="hidden xs:block text-center">
                      <span className="font-mono text-sm text-muted-foreground">
                        Benchmark
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-foreground lg:text-2xl">
                        {activeData.title}
                      </h3>
                    </div>

                    <ComparisonBars
                      // force re-mount to replay animation when activeFeature changes
                      key={activeFeature + '|' + activeData.title + '|' + activeData.description}
                      arcbox={activeData.arcbox}
                      docker={activeData.docker}
                      unit={activeData.unit}
                      arcboxPct={activeData.arcboxPct}
                      arcboxDuration={activeData.arcboxDuration}
                      dockerDuration={activeData.dockerDuration}
                    />

                    <div className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
                      <span className="font-mono text-lg lg:text-xl font-bold text-accent">
                        {activeData.improvement}x
                      </span>
                      <span className="ml-1 text-sm lg:text-base text-accent/80">faster</span>
                    </div>

                    <p className="text-center text-xs text-muted-foreground/60">
                      Benchmarks on Apple Mac Mini, M4, 36GB RAM, as of Mar, 2026.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
