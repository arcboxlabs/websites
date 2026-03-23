'use client';

import Image from 'next/image';
import HeroPrevieww from '@/images/hero-preview.webp';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function HeroPreview() {
  const [imageReady, setImageReady] = useState(false);

  return (
    <Image
      src={HeroPrevieww}
      alt="hero-image"
      className={cn(
        'absolute left-[10%] sm:left-[20%] max-w-[1200px] rounded-xl border-2 top-[420px] sm:top-[400px]',
        imageReady ? 'animate-in fade-in duration-400' : 'invisible'
      )}
      onLoad={() => setImageReady(true)}
      preload
      placeholder="blur"
    />
  );
}
