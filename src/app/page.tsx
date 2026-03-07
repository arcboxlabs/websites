import { AIIsolationSection } from './components/ai-isolation-section';
import { CTASection } from './components/cta-section';
import { FeatureCards } from './components/feature-cards';
import { Hero } from './components/hero';
import { OpenClawSection } from './components/openclaw-section';
import { OpenSourceSection } from './components/opensource-section';
import { SpeedComparison } from './components/speed-comparison';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <AIIsolationSection />
      <OpenClawSection />
      <SpeedComparison />
      <OpenSourceSection />
      <CTASection />
    </>
  );
}
