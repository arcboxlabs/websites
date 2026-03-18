import { getLLMText, source } from '@/docs/source';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export async function GET(_req: Request, { params }: RouteContext<'/docs/llms.mdx/[...slug]'>) {
  const { slug } = await params;

  const page = source.getPage(slug);
  if (!page) {
    notFound();
  }

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown'
    }
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs
  }));
}
