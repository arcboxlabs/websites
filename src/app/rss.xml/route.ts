import { xmlMinify } from '@/lib/xml-minify';
import { getRssFeedInstance } from '@/blog/rss';

export const revalidate = false;

export function GET() {
  const feed = getRssFeedInstance();

  return new Response(xmlMinify(feed.rss2()));
}
