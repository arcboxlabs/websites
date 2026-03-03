import { NextProvider } from 'fumadocs-core/framework/next';

export default function BlogLayout({ children }: React.PropsWithChildren) {
  return (
    <NextProvider>{children}</NextProvider>
  );
}
