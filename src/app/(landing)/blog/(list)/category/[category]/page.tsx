import { BlogSource } from '@/blog/cms';
import BlogGrid from '../../components/blog-grid';
import type { Metadata } from 'next';
import { blogAlternates, blogOpenGraph, createTwitter } from '@/lib/metadata';
import { notFound } from 'next/navigation';

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const featuredPost = BlogSource.getPosts()[0];
  const posts = BlogSource.getPosts({ category }).filter((post) => post.absolutePath !== featuredPost.absolutePath);

  if (!posts.length) {
    notFound();
  }

  return <BlogGrid posts={posts} />;
}

export function generateStaticParams() {
  const categories = BlogSource.getCategories();
  return categories.map((category) => ({
    category
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const title = `Category: ${category}`; // rendered as "Category: X | ArcBox Blog" via layout template
  const ogTitle = `${category} — ArcBox Blog`;
  const description = `ArcBox Blog posts in the ${category} category`;

  return {
    title,
    description,
    alternates: blogAlternates({ canonical: `/blog/category/${category}` }),
    openGraph: blogOpenGraph({
      title: ogTitle,
      description,
      type: 'website',
      url: `/blog/category/${category}`
    }),
    twitter: createTwitter({ title: ogTitle, description })
  };
}
