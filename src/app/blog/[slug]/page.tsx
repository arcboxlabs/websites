import { BlogSource } from '@/blog/source';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = BlogSource.getPost(slug);

  if (!post) {
    notFound();
  }

  const MDXContent = post.data.body;

  return (
    <div>
      <h1>{post.data.title}</h1>
      <MDXContent />
    </div>
  );
}

export function generateStaticParams() {
  const posts = BlogSource.getPosts();
  return posts.map((post) => ({
    slug: post.slugs[0]
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BlogSource.getPost(slug);

  if (!post) {
    return {};
  }

  const url = `https://arcbox.dev/blog/${slug}`;

  // Use keywords from frontmatter if available, otherwise generate from category
  const keywords =
    post.data.keywords
    || [post.data.category, 'ArcBox', 'web development', 'technology', 'blog', 'AI Agent'].filter(Boolean);

  return {
    title: post.data.title,
    description: post.data.description,
    keywords,
    authors: post.data.author
      .reduce<Array<{ name: string }>>((acc: Array<{ name: string }>, author) => {
        if (author) {
          acc.push({ name: author });
        }
        return acc;
      }, []),
    alternates: {
      canonical: url
    }
  };
}
