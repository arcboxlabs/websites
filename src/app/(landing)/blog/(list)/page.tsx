import type { Metadata } from 'next';
import BlogGrid from './components/blog-grid';
import { blogAlternates, blogOpenGraph, createTwitter } from '@/lib/metadata';
import { BlogSource } from '@/blog/cms';

export default function BlogHomePage() {
  const posts = BlogSource.getPosts();

  return <BlogGrid posts={posts} />;
}

export function generateMetadata() {
  const description = 'Engineering deep dives, product releases, and security research from the team building ArcBox.';
  return {
    title: { absolute: 'ArcBox Blog' }, // bypasses template — "ArcBox Blog" not "ArcBox Blog | ArcBox Blog"
    description,
    alternates: blogAlternates({ canonical: '/blog' }),
    openGraph: blogOpenGraph({ title: 'ArcBox Blog', description, type: 'website', url: '/blog' }),
    twitter: createTwitter({ title: 'ArcBox Blog', description })
  } satisfies Metadata;
}
