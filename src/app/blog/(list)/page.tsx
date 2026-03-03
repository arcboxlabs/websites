import { BlogSource } from '@/blog/source';
import type { Metadata } from 'next';

export default function BlogPage() {
  const posts = BlogSource.getPosts();

  return (
    <div>
      <h1>Blog</h1>
      {JSON.stringify(posts)}
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Blog'
  } satisfies Metadata;
}
