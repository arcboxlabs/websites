import type { MetadataRoute } from 'next';
import { BlogSource } from '@/blog/cms';
import { source } from '@/docs/source';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://arcbox.dev';

  const staticPages: MetadataRoute.Sitemap = ['/', '/blog', '/docs'].map((path) => ({
    url: base + path,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8
  }));

  const blogPosts: MetadataRoute.Sitemap = BlogSource.getPosts().map((post) => ({
    url: base + post.url,
    lastModified: post.data.date,
    changeFrequency: 'monthly',
    priority: 0.8
  }));

  const blogCategories: MetadataRoute.Sitemap = BlogSource.getCategories().map((cat) => ({
    url: `${base}/blog/category/${cat}`,
    changeFrequency: 'weekly',
    priority: 0.5
  }));

  const docPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: base + page.url,
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  return [...staticPages, ...blogPosts, ...blogCategories, ...docPages];
}
