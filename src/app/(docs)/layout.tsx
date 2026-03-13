import { Provider } from '@docs/components/provider';
import '@docs/styles/global.css';
import type { Metadata } from 'next';

// The Root Layout for /docs only.
export default function DocsLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Documentation',
    template: '%s | ArcBox Docs'
  },
  description: 'Documentation for ArcBox Desktop — the blazing-fast Docker alternative for Apple Silicon.',
  metadataBase: new URL('https://arcbox.dev'),
  openGraph: { type: 'website', siteName: 'ArcBox', locale: 'en_US' },
  twitter: {
    card: 'summary_large_image',
    site: '@arcboxdev',
    creator: '@arcboxdev'
  }
};
