'use client';

import { useEffect, useState } from 'react';

export default function HeaderScrollContainer({ children }: React.PropsWithChildren) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
