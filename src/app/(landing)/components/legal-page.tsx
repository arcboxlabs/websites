interface LegalPageProps {
  children: React.ReactNode,
  description: string,
  title: string,
  updated: string
}

export function LegalPage({ children, description, title, updated }: LegalPageProps) {
  return (
    <div className="px-4 pt-28 md:pt-32 lg:pt-36">
      <div className="mx-auto max-w-4xl pb-16 md:pb-24">
        <header className="border-b border-border pb-8 md:pb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Legal
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
            {description}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated:
            {' '}
            <time dateTime={updated}>
              {new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(updated))}
            </time>
          </p>
        </header>

        <article className="dark prose prose-invert mt-10 max-w-none prose-headings:scroll-m-24 prose-headings:text-foreground prose-a:text-accent prose-strong:text-foreground">
          {children}
        </article>
      </div>
    </div>
  );
}
