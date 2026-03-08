import type { Metadata } from 'next';
import BlogGrid from '../components/blog-grid';

export default function BlogHomePage() {
  return <BlogGrid />;
}

export function generateMetadata() {
  return {
    title: 'Blog'
  } satisfies Metadata;
}
