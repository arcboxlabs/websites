import type { Metadata } from 'next';

export const ARCBOX_DESKTOP_DESCRIPTION = 'The fully-opensource Docker Desktop alternative built natively for Apple Silicon with blazing-fast performance. Run containers, Kubernetes, Firecracker VMs, and sandboxed AI agents at lightning speed.';

export const TWITTER_HANDLE = '@arcboxdev';

// ---------- Alternates helpers
// Next.js does NOT deep-merge nested metadata objects — a child page defining
// `alternates` completely replaces the parent layout's value. These helpers
// inject the context-specific defaults (mainly RSS) so callers only
// need to provide the page-specific fields.
export function blogAlternates(
  fields: Metadata['alternates']
): NonNullable<Metadata['alternates']> {
  return {
    ...fields,
    types: {
      'application/atom+xml': [{
        title: 'ArcBox Blog Atom RSS',
        url: 'https://arcbox.dev/atom.xml'
      }],
      'application/rss+xml': [{
        title: 'ArcBox Blog RSS 2.0',
        url: 'https://arcbox.dev/rss.xml'
      }],
      'application/feed+json': [{
        title: 'ArcBox Blog JSON Feed',
        url: 'https://arcbox.dev/feed.json'
      }],
      ...fields?.types
    }
  };
}

// ---------- OpenGraph context helpers
// Next.js does NOT deep-merge nested metadata objects — a child page defining
// `openGraph` completely replaces the parent layout's value. These helpers
// inject the context-specific defaults (siteName, locale) so callers only need
// to provide the page-specific fields.

export function landingOpenGraph(
  fields: NonNullable<Metadata['openGraph']>
): NonNullable<Metadata['openGraph']> {
  return { siteName: 'ArcBox', locale: 'en_US', ...fields };
}

export function blogOpenGraph(
  fields: NonNullable<Metadata['openGraph']>
): NonNullable<Metadata['openGraph']> {
  return { siteName: 'ArcBox Blog', locale: 'en_US', ...fields };
}

export function docsOpenGraph(
  fields: NonNullable<Metadata['openGraph']>
): NonNullable<Metadata['openGraph']> {
  return { siteName: 'ArcBox Docs', locale: 'en_US', ...fields };
}

// ---------- Twitter helper

export function createTwitter(
  fields: NonNullable<Metadata['twitter']>
): NonNullable<Metadata['twitter']> {
  return {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    ...fields
  };
}
