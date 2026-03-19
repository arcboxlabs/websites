import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { once } from 'foxts/once';

function readFontFile(pkg: string, file: string) {
  return readFile(join(process.cwd(), 'node_modules', pkg, 'files', file));
}

export const loadOGFonts = once(async () => {
  const [sansRegular, sansSemiBold, sansBold, monoBold] = await Promise.all([
    readFontFile('@fontsource/ibm-plex-sans', 'ibm-plex-sans-latin-400-normal.woff'),
    readFontFile('@fontsource/ibm-plex-sans', 'ibm-plex-sans-latin-600-normal.woff'),
    readFontFile('@fontsource/ibm-plex-sans', 'ibm-plex-sans-latin-700-normal.woff'),
    readFontFile('@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-700-normal.woff')
  ]);

  return [
    { name: 'IBM Plex Sans', data: sansRegular, weight: 400 as const, style: 'normal' as const },
    { name: 'IBM Plex Sans', data: sansSemiBold, weight: 600 as const, style: 'normal' as const },
    { name: 'IBM Plex Sans', data: sansBold, weight: 700 as const, style: 'normal' as const },
    { name: 'IBM Plex Mono', data: monoBold, weight: 700 as const, style: 'normal' as const }
  ];
});
