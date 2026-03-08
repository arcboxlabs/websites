import { BlogSource } from '@/blog/cms';
import BlogGrid from '../../../components/blog-grid';
import type { Metadata } from 'next';

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return <BlogGrid category={category} />;
}

export function generateStaticParams() {
  const categories = BlogSource.getCategories();
  return categories.map((category) => ({
    category
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;

  return {
    title: `${category} - ArcBox Blog`,
    description: `ArcBox Blog posts in the ${category} category`
  };
}
