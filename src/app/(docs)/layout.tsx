import './styles/global.css';

import { Provider } from './components/provider';
import type { Metadata } from 'next';
import { docsOpenGraph, createTwitter } from '@/lib/metadata';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { clsx } from 'clsx';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: 'variable', style: ['normal'], variable: '--font-sans' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono' });

// The Root Layout for /docs only.
export default function DocsLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={clsx(ibmPlexSans.variable, ibmPlexMono.variable, 'font-sans')}
      // next-themes
      suppressHydrationWarning
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
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
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
