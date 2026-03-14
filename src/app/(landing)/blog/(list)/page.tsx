import type { Metadata } from 'next';
import BlogGrid from './components/blog-grid';
import { blogOpenGraph, createTwitter } from '@/lib/metadata';

export default function BlogHomePage() {
  return <BlogGrid />;
}

export function generateMetadata() {
  const description = 'Engineering deep dives, product releases, and security research from the team building ArcBox.';
  return {
    title: { absolute: 'ArcBox Blog' }, // bypasses template — "ArcBox Blog" not "ArcBox Blog | ArcBox Blog"
    description,
    alternates: { canonical: '/blog' },
    openGraph: blogOpenGraph({ title: 'ArcBox Blog', description, type: 'website', url: '/blog' }),
    twitter: createTwitter({ title: 'ArcBox Blog', description })
  } satisfies Metadata;
}
