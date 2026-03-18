import { getLLMText, source } from '@/docs/source';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export async function GET(_req: Request, { params }: RouteContext<'/docs/llms/[...slug]'>) {
  const { slug } = await params;
  const pageSlugs = [...slug.slice(0, -1), slug.at(-1)!.replace(/\.[^.]+$/, '')];

  const page = source.getPage(pageSlugs);
  if (!page) {
    return notFound();
  }

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown'
    }
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: [
      ...page.slugs.slice(0, -1),
      `${page.slugs.at(-1)}.txt`
    ]
  }));
}
