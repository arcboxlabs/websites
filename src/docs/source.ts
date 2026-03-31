import { docs } from 'fumadocs-mdx-collections/server';
import { loader } from 'fumadocs-core/source';
import type { InferPageType } from 'fumadocs-core/source';
import { createElement } from 'react';
import { fastStringArrayJoin } from 'foxts/fast-string-array-join';

import { icons } from 'lucide-react';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [],

  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  }
});

export function getPageImage(page: InferPageType<typeof source>) {
  // Embed the extension directly into the last slug segment, e.g.
  // ['intro', 'installation'] → ['intro', 'installation.png']
  // so the OG URL is /og/docs/intro/installation.png
  const segments = [
    ...page.slugs.slice(0, -1),
    `${page.slugs.at(-1)}.png`
  ];

  return {
    segments,
    url: `/og/docs/${fastStringArrayJoin(segments, '/')}`
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}
