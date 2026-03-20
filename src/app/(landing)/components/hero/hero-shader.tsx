'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import iconSvg from '@/images/hero-shader-icon.svg';
import { useCallback } from 'foxact/use-typescript-happy-callback';

const ImageDithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.ImageDithering),
  { ssr: false }
);

export function HeroShader() {
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);

  return (
    <>
      {/* Hidden next/image handles optimized loading + preload */}
      <Image
        onLoad={useCallback((e) => {
          setImgEl(e.currentTarget);
        }, [])}
        src={iconSvg}
        alt=""
        aria-hidden
        className="invisible absolute"
        // priority
        decoding="sync"
        loading="eager"
        preload
      />
      {imgEl && (
        <ImageDithering
          className="absolute inset-0 size-full animate-in fade-in duration-500 opacity-15"
          image={imgEl}
          colorBack="#00000000"
          colorFront="#c06a20"
          colorHighlight="#e8943c"
          originalColors
          inverted={false}
          type="4x4"
          scale={0.6}
          size={2}
          colorSteps={2}
          fit="cover"
        />
      )}
    </>
  );
}
