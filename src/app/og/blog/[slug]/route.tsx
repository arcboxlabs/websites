import { BlogSource, getPostImage } from '@/blog/cms';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { OGImage } from '@/app/og/components/og-template';

export const revalidate = false;

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // slug is e.g. 'my-post.png' — strip the extension to look up the post
  const post = BlogSource.getPost(slug.replace(/\.[^.]+$/, ''));
  if (!post) notFound();

  return new ImageResponse(
    <OGImage
      title={post.data.title}
      description={post.data.description}
      url={new URL(post.url, 'https://arcbox.dev').href}
      siteName="ArcBox"
      section="blog"
    />,
    { width: 1200, height: 630 }
  );
}

export function generateStaticParams() {
  return BlogSource.getPosts().map((post) => ({ slug: getPostImage(post).slug }));
}
