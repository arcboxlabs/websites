import { getRssFeedInstance } from '@/blog/rss';

export const revalidate = false;

export function GET() {
  const feed = getRssFeedInstance();
  return Response.json(JSON.parse(feed.json1()));
}
