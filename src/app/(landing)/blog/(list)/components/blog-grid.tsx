import { Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorAvatars } from './author-avatars';
import type { BlogPage } from '@/blog/cms';

export interface BlogGridProps {
  posts: BlogPage[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <>
      {posts.map((post) => (
        <Link href={`/blog/${post.slugs[0]}`} key={post.path} className="group flex flex-col">
          {/* Thumbnail */}
          <div className="relative aspect-16/10 overflow-hidden rounded-xl border border-border">
            {post.data.cover && (
              <Image
                src={post.data.cover}
                alt={post.data.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Category badge overlay */}
            <div className="absolute top-3 left-3">
              <span className="rounded-full border border-accent/40 bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur-sm">
                {post.data.category}
              </span>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.data.date}
            </span>
            {/* <span className="h-3 w-px bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.data.readTime}
            </span> */}
          </div>

          {/* Title */}
          <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground text-balance group-hover:text-accent transition-colors">
            {post.data.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2 text-pretty">
            {post.data.description}
          </p>

          {/* Authors */}
          <div className="mt-4 flex items-center gap-2">
            <AuthorAvatars authors={post.data.author} size={22} />
            <span className="text-xs text-muted-foreground">
              {post.data.author.join(', ')}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}
