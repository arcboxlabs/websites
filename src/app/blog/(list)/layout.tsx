import { BlogSource } from '@/blog/source';

export default function BlogListLayout({ children }: React.PropsWithChildren) {
  const categories = BlogSource.getCategories();

  return (
    <div>
      <div>
        Categories: {JSON.stringify(categories)}
      </div>
      {children}
    </div>
  );
}
