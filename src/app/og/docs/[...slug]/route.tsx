import { getPageImage, source } from '@/docs/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { OGImage } from '@/app/og/components/og-template';

export const dynamic = 'force-static';
export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  // slug is e.g. ['intro', 'installation.png'] — strip the extension from the last segment
  const pageSlugs = [...slug.slice(0, -1), slug.at(-1)!.replace(/\.[^.]+$/, '')];
  const page = source.getPage(pageSlugs);
  if (!page) notFound();
  return new ImageResponse(
    <OGImage
      title={page.data.title}
      description={page.data.description}
      url={new URL(page.url, 'https://arcbox.dev').href}
      siteName="ArcBox"
      section="docs"
    />,
    { width: 1200, height: 630 }
  );
}
export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments
  }));
}
