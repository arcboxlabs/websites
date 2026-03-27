import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BlogSource, getPostImage } from '@/blog/cms';
import { getAuthor } from '@/blog/blog-authors';
import type { Author } from '@/blog/blog-authors';
import { BlogAside } from './components/blog-aside';
import type { Metadata } from 'next';
import { isNonNullish } from 'foxts/guard';
import { blogAlternates, blogOpenGraph, createTwitter } from '@/lib/metadata';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { BlogRssCTA } from '../components/blog-rss-cta';

import { Heading } from './components/mdx/heading';

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
      <div className="px-4">
        <div className="mx-auto max-w-6xl md:pb-12 pb-16">
          {/* Header block — sits above two columns */}
          <div className="border-b border-border py-8 md:py-10">
            {/* Category */}
            {post.data.category && (
              <Link href={`/blog/category/${post.data.category}`} className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                [{post.data.category}]
              </Link>
            )}

            {/* Title */}
            <h1 className="text-balance font-bold tracking-tight text-foreground text-2xl md:text-3xl lg:text-4xl">
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
            <div className="min-w-0 flex-1">
              <article className="dark prose prose-invert max-w-none">
                <MDXContent
                  components={getMDXComponents({
                    // this allows you to link to other pages with relative file paths
                    a: createRelativeLink(BlogSource.source, post),
                    h1({ children, ...props }) {
                      return <Heading className="mt-12 mb-8" asChild {...props}><h1 className="mt-0 mb-0 scroll-m-8 text-3xl peer">{children}</h1></Heading>;
                    },
                    h2({ children, ...props }) {
                      return <Heading className="mt-12 mb-8" asChild {...props}><h2 className="mt-0 mb-0 scroll-m-8 text-[28px] peer">{children}</h2></Heading>;
                    },
                    h3({ children, ...props }) {
                      return <Heading className="mt-8 mb-6" asChild {...props}><h3 className="mt-0 mb-0 scroll-m-6 text-2xl peer">{children}</h3></Heading>;
                    },
                    h4({ children, ...props }) {
                      return <Heading className="mt-6 mb-4" asChild {...props}><h4 className="mt-0 mb-0 scroll-m-4 text-xl peer">{children}</h4></Heading>;
                    },
                    h5({ children, ...props }) {
                      return <Heading className="mt-4 mb-2" asChild {...props}><h5 className="mt-0 mb-0 scroll-m-2 text-base peer">{children}</h5></Heading>;
                    },
                    h6({ children, ...props }) {
                      return <Heading className="mt-2 mb-1" asChild {...props}><h6 className="mt-0 mb-0 scroll-m-1 text-sm peer">{children}</h6></Heading>;
                    }
                    // CodeBlock -- ensure Tailwind classes are generated from this
                    // text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring
                    // min-w-full w-max *:flex *:flex-col
                    // empty:hidden absolute top-3 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground
                  })}
                />
              </article>

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
            </div>
            <BlogAside
              toc={post.data.toc.filter((item) => item.depth <= 2)}
              fullUrl={`https://arcbox.dev/blog/${post.slugs[0]}`}
            />
          </div>
        </div>
        {/** CTA */}
        <section className="mx-auto max-w-6xl pb-16">
          <BlogRssCTA />
        </section>
        {/* <CTASection className="pt-12" /> */}
      </div>
    </>
  );
}

export function generateStaticParams() {
  const posts = BlogSource.getPosts();
  return posts.map((post) => ({
    slug: post.slugs[0]
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogSource.getPost(slug);

  if (!post) {
    return {};
  }

  // Use keywords from frontmatter if available, otherwise generate from category
  const keywords =
    post.data.keywords
    || [post.data.category, 'ArcBox', 'web development', 'technology', 'blog', 'AI Agent'].filter(isNonNullish);

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
    alternates: blogAlternates({ canonical: post.url }),
    openGraph: blogOpenGraph({
      type: 'article',
      title: post.data.title,
      description: post.data.description,
      url: post.url,
      publishedTime: post.data.date,
      tags: keywords,
      images: getPostImage(post).url
    }),
    twitter: createTwitter({
      title: post.data.title,
      description: post.data.description,
      images: getPostImage(post).url
    })
  };
}
