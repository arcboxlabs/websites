import type { Metadata } from 'next';

// import 'minireset.css';
import '@landing/styles/tailwind.css';
import '@landing/styles/global.css';
import Layout from './components/layout';
import { NavbarMobileMenuPortalProvider } from './contexts/navbar-mobile-menu-portal';
import { landingOpenGraph, createTwitter } from '@/lib/metadata';
import { clsx } from 'clsx';
// import 'stylex-webpack/stylex.css';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-sans' });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: {
    default: 'ArcBox — The blazing-fast, open-sourced Docker Desktop Alternative for Apple Silicon',
    template: '%s | ArcBox'
  },
  description: 'The blazing-fast Docker Desktop alternative built natively for Apple Silicon. Run containers, Firecracker VMs, and sandboxed AI agents with 4x better performance. Open source.',
  keywords: ['docker', 'containers', 'apple silicon', 'firecracker', 'devcontainer', 'sandbox', 'AI agent', 'docker desktop alternative', 'mac', 'open source', 'OpenClaw'],
  authors: [{ name: 'ArcBox Team', url: 'https://arcbox.dev' }],
  metadataBase: new URL('https://arcbox.dev'),
  openGraph: landingOpenGraph({
    type: 'website',
    url: 'https://arcbox.dev',
    siteName: 'ArcBox',
    title: 'ArcBox — The blazing-fast, open-sourced Docker Desktop Alternative for Apple Silicon',
    description: 'The blazing-fast Docker Desktop alternative built natively for Apple Silicon. Run containers, Firecracker VMs, and sandboxed AI agents with 4× better performance.'
    // images: [{ url: '/arcbox-logo.png', width: 1200, height: 630, alt: 'ArcBox' }]
  }),
  twitter: createTwitter({
    title: 'ArcBox — Docker Desktop Alternative for Apple Silicon',
    description: 'The blazing-fast Docker Desktop alternative built natively for Apple Silicon.',
    images: ['/arcbox-logo.png']
  }),
  alternates: { canonical: 'https://arcbox.dev' },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={process.env.NODE_ENV !== 'production'}
        className={clsx(ibmPlexSans.variable, ibmPlexMono.variable, 'font-sans')}
      >
        <NavbarMobileMenuPortalProvider id="global-navbar-mobile-menu-portal">
          <Layout>
            {children}
          </Layout>
        </NavbarMobileMenuPortalProvider>
      </body>
    </html>
  );
}
