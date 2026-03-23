'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import ImageHeroPreview from '@/images/hero-preview.png';
import { cn } from '@/lib/utils';

export default function HeroPreview() {
  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => setLoaded(true), []);

  return (
    <div
      className="absolute left-[10%] sm:left-[20%] max-w-300 rounded-md border-3 top-105 sm:top-100"
      style={{
        backgroundImage: `url(${ImageHeroPreview.blurDataURL})`,
        backgroundSize: 'cover',
        width: ImageHeroPreview.width,
        aspectRatio: `${ImageHeroPreview.width} / ${ImageHeroPreview.height}`
      }}
    >
      <Image
        src={ImageHeroPreview}
        alt="hero-image"
        className={cn(
          'rounded-md transition-opacity duration-200',
          loaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={onLoad}
        preload
      />
    </div>
  );
}
