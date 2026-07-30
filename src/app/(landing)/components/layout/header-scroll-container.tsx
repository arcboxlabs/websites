'use client';

import { useState } from 'react';
import { useEffect } from 'foxact/use-abortable-effect';

export default function HeaderScrollContainer({ children }: React.PropsWithChildren) {
  const [scrolled, setScrolled] = useState(false);

  useEffect((signal) => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { signal });
  }, []);

  return (
    <div
      className={`mx-auto max-w-6xl transition-all duration-300 ${
        scrolled ? 'bg-secondary/70' : 'bg-secondary/90'
      } rounded-full border border-border backdrop-blur-xl`}
    >
      {children}
    </div>
  );
}
