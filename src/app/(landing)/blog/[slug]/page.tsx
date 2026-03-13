import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BlogSource } from '@/blog/cms';
import { getAuthor } from '@/blog/blog-authors';
import type { Author } from '@/blog/blog-authors';
import { BlogAside } from './components/blog-aside';
import { CTASection } from '../../components/cta-section';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = BlogSource.getPost(slug);

  if (!post) {
    notFound();
  }

  const MDXContent = post.data.body;
  const postAuthors = post.data.author
    .reduce((acc: Author[], id) => {
      if (!id) return acc;
      const author = getAuthor(id);
      if (author) {
        acc.push(author);
      }
      return acc;
    }, []);

  return (
    <>
      {/* <div className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Posts
          </Link>
        </div>
      </div> */}

      {/* Hero image — full width */}
      {post.data.cover && (
        <div className="relative h-85 w-full overflow-hidden md:h-105 lg:h-125 xl:h-140">
          <Image
            src={post.data.cover}
            alt={post.data.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
        </div>
      )}

      {/* Main layout */}
      <div className="mx-auto max-w-6xl px-4">
        {/* Header block — sits above two columns */}
        <div className="border-b border-border py-8 md:py-10">
          {/* Category */}
          {post.data.category && (
            <Link href={`/blog/category/${post.data.category}`} className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
              [{post.data.category}]
            </Link>
          )}

          {/* Title */}
          <h1 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {post.data.title}
          </h1>

          {/* Date + read time */}
          <p className="mt-3 text-sm text-muted-foreground">
            {post.data.date}
          </p>

          {/* Authors */}
          {postAuthors.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-4">
              {postAuthors.map((author) => (
                <div key={author.id} className="flex items-center gap-3">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={38}
                    height={38}
                    className="rounded-full ring-2 ring-border"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">{author.name}</p>
                    <p className="text-xs text-muted-foreground">{post.data.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Two-column: content + sidebar */}
        <div className="mt-10 flex gap-16">
          {/* Main content */}
          <article className="min-w-0 flex-1">
            <div className="prose prose-invert max-w-none">
              <MDXContent />
            </div>

            {/* Back link at bottom */}
            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </div>
          </article>
          <BlogAside
            toc={post.data.toc.filter((item) => item.depth <= 2)}
            fullUrl={`https://arcbox.dev/blog/${post.slugs[0]}`}
          />
        </div>
      </div>
      {/** CTA */}
      <CTASection className="pt-12" />
    </>
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
      canonical: post.url
    },
    openGraph: {
      type: 'article',
      title: post.data.title,
      description: post.data.description,
      url: post.url,
      publishedTime: post.data.date,
      tags: keywords as string[],
      ...(post.data.cover ? { images: [{ url: post.data.cover, alt: post.data.title }] } : {})
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.description,
      site: '@arcboxdev',
      creator: '@arcboxdev',
      ...(post.data.cover ? { images: [post.data.cover] } : {})
    }
  };
}
