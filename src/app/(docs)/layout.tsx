import { Provider } from '@docs/components/provider';
import '@docs/styles/global.css';
import type { Metadata } from 'next';
import { docsOpenGraph, createTwitter } from '@/lib/metadata';

// The Root Layout for /docs only.
export default function DocsLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning={process.env.NODE_ENV !== 'production'}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'ArcBox Docs',
    template: '%s | ArcBox Docs'
  },
  description: 'Documentation for ArcBox Desktop — the blazing-fast Docker alternative for Apple Silicon.',
  metadataBase: new URL('https://arcbox.dev'),
  openGraph: docsOpenGraph({
    type: 'website',
    siteName: 'ArcBox Docs',
    url: 'https://arcbox.dev/docs',
    title: 'Documentation Home'
  }),
  twitter: createTwitter({})
};
