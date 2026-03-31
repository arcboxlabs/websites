import 'server-only';

import path from 'node:path';
import { hasProtocol } from 'ufo';

import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type BlogThumbnailProps = Omit<React.ComponentProps<typeof Image>, 'src'> & {
  src: string
};

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const BLOG_COVER_DIR = path.join(PUBLIC_DIR, 'blog', 'cover');

export default async function BlogThumbnail({ src, alt, placeholder, ...restProps }: BlogThumbnailProps) {
  if (hasProtocol(src)) {
    if (placeholder === 'blur') {
      // eslint-disable-next-line @eslint-react/purity -- We are doing static export, and this warning is emitted during build time
      process.emitWarning(`[BlogThumbnail] blur placeholder is not supported for remote images, ignoring: ${src}`);
    }

    return <Image src={src} alt={alt} {...restProps} />;
  }

  // The static prefix '../../../../../public/' is a compile-time constant so Turbopack can
  // build a module context for the directory.
  //
  // The dynamic bit is calculated dynamically from front-matter at server runtime, computed
  // via path.relative for portability.
  const dynamicBit = path.relative(BLOG_COVER_DIR, path.join(PUBLIC_DIR, src)).replaceAll(path.sep, '/');
  let imgData = await import(`../../../../../public/blog/cover/${dynamicBit}`) as StaticImport;

  // interop default. this is to workaround the following warning:
  // > Only plain objects can be passed to Client Components from Server Components. Module objects are not supported.
  if ('default' in imgData && typeof imgData.default === 'object' && 'src' in imgData.default) {
    imgData = imgData.default;
  }

  return <Image src={imgData} alt={alt} {...restProps} />;
}
