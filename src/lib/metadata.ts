import type { Metadata } from 'next';

export const TWITTER_HANDLE = '@arcboxdev';

// ─── OpenGraph context helpers ───────────────────────────────────────────────
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

// ─── Twitter helper ──────────────────────────────────────────────────────────

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
