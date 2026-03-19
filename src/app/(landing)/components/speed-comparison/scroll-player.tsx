'use client';

import { useGSAP } from '@gsap/react';
import _gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { useIntersection } from 'foxact/use-intersection';
import { cn } from '@/lib/utils';
import { ComparisonBars } from './comparison-bars';
import type { FeatureData } from './index';

_gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export function ScrollPlayer({
  features,
  header,
  leftDecoration,
  rightDecoration,
  footnote
}: {
  features: FeatureData[],
  header: React.ReactNode,
  leftDecoration: React.ReactNode,
  rightDecoration: React.ReactNode,
  footnote: React.ReactNode
}) {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const isScrollingRef = useRef(false);
  const [setIntersectionRef, hasIntersected] = useIntersection({ rootMargin: '0px' });

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
    <div ref={triggerRef}>
      <div ref={sectionRef}>
        <div className="flex h-dvh items-center pt-22.5">
          <div
            ref={setIntersectionRef}
            className="relative z-10 h-full w-full lg:min-h-100 lg:max-h-280"
          >
            {header}

            <div className="flex flex-col border-border bg-card lg:h-[calc(100%-16rem)] lg:flex-row">
              {/* Left: Feature list */}
              <div className="relative flex shrink-0 items-center border-b border-border lg:w-[45%] lg:border-b-0 lg:border-r lg:border-border">
                {leftDecoration}

                <ul className="relative z-10 w-full lg:pl-12 xl:pl-20">
                  {features.map((feature, idx) => {
                    const isActive = idx === activeFeature;
                    return (
                      <li
                        key={feature.title}
                        className={cn(
                          'relative flex cursor-pointer gap-3 border-b border-border px-4 py-2.5 leading-[140%] transition-all duration-300 last:border-b-0 sm:gap-4 sm:p-4 lg:border-b-0 lg:p-6',
                          isActive ? 'items-start' : 'items-center'
                        )}
                        onClick={() => scrollToFeature(idx)}
                      >
                        {isActive && (
                          <div className="absolute -right-px hidden h-8 w-0.5 transform-none origin-center bg-accent lg:block" />
                        )}

                        {/* <div
                          className={cn(
                            'shrink-0 font-mono font-medium text-muted-foreground transition-all duration-300',
                            'text-base sm:text-lg md:text-xl lg:text-2xl',
                            isActive && 'font-bold text-accent lg:text-3xl'
                          )}
                        >
                          0{idx + 1}/
                        </div> */}

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
                              'overflow-hidden text-sm text-muted-foreground lg:max-w-sm',
                              isActive && 'pt-2 sm:pt-3'
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
                {rightDecoration}

                <div className="relative z-10 flex md:grow flex-col items-center justify-center gap-4 p-4 sm:gap-8 sm:p-6 lg:p-10">
                  {activeData.metricTitle}

                  <ComparisonBars
                    // force re-mount to replay animation when activeFeature changes
                    key={activeFeature}

                    arcbox={activeData.arcbox}
                    docker={activeData.docker}
                    unit={activeData.unit}
                    arcboxPct={activeData.arcboxPct}
                    arcboxDuration={activeData.arcboxDuration}
                    dockerDuration={activeData.dockerDuration}
                    hasIntersected={hasIntersected}
                  />

                  {activeData.improvementBadge}

                  {footnote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
