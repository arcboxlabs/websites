import { notFound } from 'next/navigation';
import { BlogSource } from '@/blog/source';

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = BlogSource.getPosts({ category });

  if (!posts.length) {
    notFound();
  }

  return (
    <div>
      <h1>Blog</h1>
      {JSON.stringify(posts)}
    </div>
  );
}

export function generateStaticParams() {
  const categories = BlogSource.getCategories();
  return categories.map((category) => ({
    category
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return {
    title: `${category} - ArcBox Blog`,
    description: `ArcBox Blog posts in the ${category} category`
  };
}
