import 'server-only';

import path from 'node:path/posix';
import { hasProtocol } from 'ufo';

import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type BlogThumbnailProps = Omit<React.ComponentProps<typeof Image>, 'src'> & {
  src: string
};

export default async function BlogThumbnail({ src, alt, placeholder, ...restProps }: BlogThumbnailProps) {
  if (hasProtocol(src)) {
    if (placeholder === 'blur') {
      // eslint-disable-next-line @eslint-react/purity -- We are doing static export, and this warning is emitted during build time
      process.emitWarning(`[BlogThumbnail] blur placeholder is not supported for remote images, ignoring: ${src}`);
    }

    return <Image src={src} alt={alt} placeholder={placeholder} {...restProps} />;
  }

  // The static prefix '../../../../../public/' or '@public/' is a compile-time constant so Turbopack
  // can build a module context for the directory.
  //
  // The dynamic bit is calculated dynamically from front-matter at server runtime, computed
  // via path.relative for portability.
  //
  // due to the limitation of template literal import (whatever bundler), bundler can't static
  // analyze and tree shake usage, thus can only import everything under the folder.
  //
  // By limiting the scope to `public/blog/cover` we can avoid importing unnecessary files.
  const srcRelativeToCoverDir = path.relative('/blog/cover', src);

  let imgData = await import(`@public/blog/cover/${srcRelativeToCoverDir}`) as StaticImport;
  // interop default. this is to workaround the following warning:
  // > Only plain objects can be passed to Client Components from Server Components. Module objects are not supported.
  if ('default' in imgData && typeof imgData.default === 'object' && 'src' in imgData.default) {
    imgData = imgData.default;
  }

  return <Image src={imgData} alt={alt} placeholder={placeholder} {...restProps} />;
}
