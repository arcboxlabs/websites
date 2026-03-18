import { Provider } from '@docs/components/provider';
import '@docs/styles/global.css';
import type { Metadata } from 'next';
import { docsOpenGraph, createTwitter } from '@/lib/metadata';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { clsx } from 'clsx';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-sans' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-mono' });

// The Root Layout for /docs only.
export default function DocsLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(ibmPlexSans.variable, ibmPlexMono.variable, 'font-sans')}
    >
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
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-icon.png'
  },
  metadataBase: new URL('https://arcbox.dev'),
  openGraph: docsOpenGraph({
    type: 'website',
    siteName: 'ArcBox Docs',
    url: 'https://arcbox.dev/docs',
    title: 'Documentation Home'
  }),
  twitter: createTwitter({})
};
