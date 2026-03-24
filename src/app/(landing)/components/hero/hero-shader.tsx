'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const ImageDithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.ImageDithering),
  { ssr: false }
);

const ICON_SVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="48 145 416 210"%3E%3Cdefs%3E%3ClinearGradient id="c" x1="0%25" x2="0%25" y1="0%25" y2="100%25"%3E%3Cstop offset="0%25" stop-color="%23ffc89a"/%3E%3Cstop offset="20%25" stop-color="%23ff8c4a"/%3E%3Cstop offset="45%25" stop-color="%23e86518"/%3E%3Cstop offset="75%25" stop-color="%23c04a0c"/%3E%3Cstop offset="100%25" stop-color="%238a3000"/%3E%3C/linearGradient%3E%3ClinearGradient id="d" x1="0%25" x2="0%25" y1="0%25" y2="100%25"%3E%3Cstop offset="0%25" stop-color="%23fff" stop-opacity=".7"/%3E%3Cstop offset="40%25" stop-color="%23fff" stop-opacity=".1"/%3E%3Cstop offset="100%25" stop-color="%23fff" stop-opacity="0"/%3E%3C/linearGradient%3E%3Cfilter id="e" width="140%25" height="140%25" x="-20%25" y="-20%25"%3E%3CfeGaussianBlur stdDeviation="3"/%3E%3C/filter%3E%3Cfilter id="a" width="200%25" height="200%25" x="-50%25" y="-50%25"%3E%3CfeGaussianBlur stdDeviation="15"/%3E%3C/filter%3E%3C/defs%3E%3Cpath fill="none" stroke="%23a04010" stroke-linecap="round" stroke-width="55" d="M78 335q178-260 356 0" filter="url(%23a)" opacity=".1"/%3E%3Cpath fill="none" stroke="url(%23c)" stroke-linecap="round" stroke-width="54" d="M75 320q181-265 362 0"/%3E%3Cpath fill="none" stroke="url(%23d)" stroke-linecap="round" stroke-width="40" d="M80 315q176-257 352 0" filter="url(%23e)"/%3E%3Cpath fill="none" stroke="%23fff" stroke-linecap="round" stroke-width="6" d="M110 300q146-215 292 0" filter="url(%23e)" opacity=".7"/%3E%3C/svg%3E';

const ICON_WIDTH = 2028;
const ICON_HEIGHT = 1024;

export function HeroShader() {
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);

  return (
    <>
      <img
        ref={setImgEl}
        src={ICON_SVG}
        width={ICON_WIDTH}
        height={ICON_HEIGHT}
        alt=""
        aria-hidden
        className="invisible absolute"
        decoding="sync"
        loading="eager"
        fetchPriority="high"
      />
      {imgEl && (
        <ImageDithering
          className="absolute inset-0 size-full animate-in fade-in duration-500 opacity-10 lg:opacity-20"
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
