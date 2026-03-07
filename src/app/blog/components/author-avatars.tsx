import { getAuthor } from '../../../../content/blog-authors';
import type { Author } from '../../../../content/blog-authors';
import Image from 'next/image';

export interface AuthorAvatarsProps {
  authors: Array<string | undefined>,
  size?: number
}

export function AuthorAvatars({ authors: authorIds, size = 28 }: AuthorAvatarsProps) {
  const authors = authorIds.reduce<Author[]>((acc, id) => {
    if (!id) return acc;

    const author = getAuthor(id);
    if (author) acc.push(author);

    return acc;
  }, []);

  const visibleCount = Math.min(authors.length, 3);
  const visible = authors.slice(0, visibleCount);
  const remaining = Math.max(0, authors.length - visibleCount);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center" style={{ marginRight: visible.length > 1 ? 4 : 0 }}>
        {visible.map((author, i) => (
          <div
            key={author.name}
            className="relative rounded-full ring-2 ring-background"
            style={{ marginLeft: i > 0 ? -8 : 0, zIndex: visible.length - i }}
          >
            <Image
              src={author.avatar}
              alt={`Avatar of ${author.name}`}
              width={size}
              height={size}
              className="rounded-full"
            />
            {remaining > 0 && i === visibleCount - 1 && (
              <div className="absolute bottom-0 right-0 bg-gray-900 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-background">
                +{remaining}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
