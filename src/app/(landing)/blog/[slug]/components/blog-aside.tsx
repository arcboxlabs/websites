import type { TOCItemType } from './blog-aside-toc';
import BlogAsideToc from './blog-aside-toc';
import BlogAsideCopyPostUrl from './blog-aside-copy-post-url';

interface BlogAsideProps {
  toc: TOCItemType[],
  fullUrl: string
}

export function BlogAside({ toc, fullUrl }: BlogAsideProps) {
  return (
    <aside className="hidden w-56 shrink-0 xl:block">
      <div className="sticky top-22 pt-1">
        {/* ToC */}
        {toc.length > 0 && (
          <div>
            <p className="mb-3 text-base font-semibold uppercase tracking-widest text-muted-foreground">
              On this page
            </p>
            <BlogAsideToc toc={toc} />
          </div>
        )}

        {/* Share */}
        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-3 text-base font-semibold uppercase tracking-widest text-muted-foreground">
            Share
          </p>
          <BlogAsideCopyPostUrl fullUrl={fullUrl} />
        </div>
      </div>
    </aside>
  );
}
