import { fastStringArrayJoin } from 'foxts/fast-string-array-join';
import { getAuthor } from '@/blog/blog-authors';

export default function AuthorNames({ authorIds }: { authorIds: Array<string | undefined> }) {
  const authorNames = authorIds.reduce<string[]>((acc, id) => {
    if (!id) return acc;

    const author = getAuthor(id);
    if (author) acc.push(author.name);

    return acc;
  }, []);

  const visibleCount = Math.min(authorNames.length, 3);
  const visible = authorNames.slice(0, visibleCount);
  const remaining = Math.max(0, authorNames.length - visibleCount);

  if (visible.length === 0) return null;

  if (visible.length === 1) return <span>{visible[0]}</span>;

  if (remaining <= 0) {
    return <span>{fastStringArrayJoin(visible.slice(0, -1), ', ')} and {visible[visible.length - 1]}</span>;
  }

  return (
    <span>
      {fastStringArrayJoin(visible, ', ')}
      {' '}
      and {remaining} more
    </span>
  );
}
