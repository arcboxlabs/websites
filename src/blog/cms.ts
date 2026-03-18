import { loader } from 'fumadocs-core/source';
import type { InferPageType } from 'fumadocs-core/source';

// has to be fumadocs-mdx-collections instead of fumadocs-mdx:collections
// because of https://github.com/fuma-nama/fumadocs/issues/2726
import { blog } from 'fumadocs-mdx-collections/server';

const source = loader({
  baseUrl: '/blog',
  source: blog.toFumadocsSource()
});

export type BlogPage = InferPageType<typeof source>;

export function getPostImage(post: BlogPage) {
  const slug = post.slugs[0];
  return {
    // e.g. 'my-post.png' — for use in Next.js generateStaticParams
    slug: `${slug}.png`,
    url: `/og/blog/${slug}.png`
  };
}

export const BlogSource = {
  source,

  /**
   * Get a single blog post by slug
   * @param slug - The slug of the post to retrieve
   * @returns The post if found, undefined otherwise
   */
  getPost(slug: string) {
    const allPosts = source.getPages();
    return allPosts.find((post) => post.slugs[0] === slug);
  },

  /**
   * Get all unique categories from blog posts
   * @returns Array of unique category names
   */
  getCategories() {
    const allPosts = this.getPosts();
    return Array.from(new Set(allPosts.map((post) => post.data.category)))
      .filter(Boolean)
      .sort((a, b) => a!.localeCompare(b!));
  },

  /**
   * Get all blog posts with optional filtering
   * @param options - Optional filter options
   * @param options.publishedOnly - If true (default), return only published posts; if false, return all posts including drafts
   * @param options.category - Filter by specific category
   * @returns Array of filtered posts, sorted by date (posts without date first, then newer posts first)
   */
  getPosts({ publishedOnly = process.env.NODE_ENV === 'production', category }: { publishedOnly?: boolean, category?: string } = {}) {
    let filtered = source.getPages();

    if (category) {
      filtered = filtered.filter((post) => post.data.category === category);
    }

    if (publishedOnly) {
      filtered = filtered.filter((post) => post.data.published);
    }

    // Sort by date: posts without date first, then newer posts first
    filtered.sort((a, b) => {
      const dateA = a.data.date;
      const dateB = b.data.date;

      // Posts without date come first
      if (!dateA && !dateB) return 0;
      if (!dateA) return -1;
      if (!dateB) return 1;

      // Sort by date descending (newer first)
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    });

    return filtered;
  }
};
