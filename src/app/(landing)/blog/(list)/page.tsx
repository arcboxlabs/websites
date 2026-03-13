import type { Metadata } from 'next';
import BlogGrid from './components/blog-grid';

export default function BlogHomePage() {
  return <BlogGrid />;
}

export function generateMetadata() {
  return {
    title: 'Blog',
    description: 'Engineering deep dives, product releases, and security research from the team building ArcBox.',
    alternates: { canonical: '/blog' },
    openGraph: {
      title: 'ArcBox Blog',
      description: 'Engineering deep dives, product releases, and security research from the team building ArcBox.',
      type: 'website',
      url: '/blog'
    },
    twitter: { card: 'summary_large_image', title: 'ArcBox Blog' }
  } satisfies Metadata;
}
