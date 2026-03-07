'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface CategoryFilterProps {
  categories: Array<string | undefined>
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const params = useParams();
  const activeCategory = params.category;

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/50 p-1 flex-wrap">
      <Link
        href="/blog"
        className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${activeCategory
          ? 'text-muted-foreground hover:text-foreground'
          : 'bg-accent text-primary-foreground shadow-sm'
        }`}
      >
        All
      </Link>
      {categories.map((cat) => {
        if (!cat) return null;

        return (
          <Link
            key={cat}
            href={`/blog/category/${cat}`}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${activeCategory === cat
              ? 'bg-accent text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
