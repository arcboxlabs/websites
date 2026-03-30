import { BlogSource } from '@/blog/cms';
import { ArrowUpRight, CalendarIcon, ClockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthorAvatars } from './components/author-avatars';
import { CategoryFilter } from '../components/category-filter';
import { BlogRssCTA } from '../components/blog-rss-cta';
import type { Metadata } from 'next';
import { blogAlternates } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { default: 'ArcBox Blog', template: '%s | ArcBox Blog' },
  description: 'Engineering deep dives, product releases, and security research from the team building ArcBox.',
  alternates: blogAlternates()
};

export default function BlogListLayout({ children }: React.PropsWithChildren) {
  const categories = BlogSource.getCategories();

  const posts = BlogSource.getPosts();
  const featured = posts[0];

  return (
    <div className="px-4 pt-28 md:pt-32 lg:pt-36">
      {/* Hero header */}
      <section className="relative overflow-hidden pb-12 md:pb-16">
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.7 0.16 45 / 0.06) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.7 0.16 45 / 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Radial fade out */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,transparent_60%,var(--background)_100%)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm text-accent">
            Announcements, updates & deep dives
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            The ArcBox Blog<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto text-pretty">
            Engineering deep dives, product releases, and security research from the team building ArcBox.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-6xl pb-12 md:pb-16">
        <Link href={`/blog/${featured.slugs[0]}`} className="group block">
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/40">
            {/* Thumbnail */}
            <div className="relative aspect-4/3 md:aspect-auto overflow-hidden">
              <Image
                src={featured.data.cover!}
                alt={featured.data.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-card/30" />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                [{featured.data.category}]
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground text-balance md:text-3xl group-hover:text-accent transition-colors">
                {featured.data.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {featured.data.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <AuthorAvatars authors={featured.data.author} />
                  <div>
                    <p className="text-xs font-medium text-foreground">
                      {featured.data.author.join(', ')}
                    </p>

                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {featured.data.date}
                      </span>
                      {typeof featured.data._exports.readingTime === 'number' && featured.data._exports.readingTime > 0 && (
                        <>
                          <span className="h-3 w-px bg-border" />
                          <span className="flex items-center gap-1">
                            <ClockIcon className="h-3 w-3" />
                            {featured.data._exports.readingTime} min read
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary transition-colors group-hover:border-accent group-hover:bg-accent/10">
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/**
        * All posts + filter
        *
        * There is no point of showing "All posts" section if we only have 1 post (the featured one). In that case, we can just show the featured post and skip the rest of the section.
        */}
      {posts.length > 1 && (
        <section className="mx-auto max-w-6xl pb-12 md:pb-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              All Posts<span className="text-accent">.</span>
            </h2>

            {/* there is no point of category filter if we don't have enough posts */}
            {posts.length > 5 && <CategoryFilter categories={categories} />}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {children}
          </div>
        </section>
      )}

      {/* RSS CTA */}
      <section className="mx-auto max-w-6xl pb-16">
        <BlogRssCTA />
      </section>
    </div>
  );
}
