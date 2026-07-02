import { loader } from 'fumadocs-core/source';

// has to be fumadocs-mdx-collections instead of fumadocs-mdx:collections
// because of https://github.com/fuma-nama/fumadocs/issues/2726
import { legal } from 'fumadocs-mdx-collections/server';

const source = loader({
  baseUrl: '/',
  source: legal.toFumadocsSource()
});

export type LegalSlug = 'cookies' | 'privacy' | 'terms';

export function getLegalPage(slug: LegalSlug) {
  const page = source.getPage([slug]);
  if (!page) {
    throw new Error(`Missing legal content: ${slug}.mdx`);
  }
  return page;
}
