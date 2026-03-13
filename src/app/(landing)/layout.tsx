import type { Metadata } from 'next';

// import 'minireset.css';
import '@landing/styles/tailwind.css';
import '@landing/styles/global.css';
import Layout from './components/layout';
import { NavbarMobileMenuPortalProvider } from './contexts/navbar-mobile-menu-portal';
// import 'stylex-webpack/stylex.css';

export const metadata: Metadata = {
  title: {
    default: 'ArcBox — Docker Desktop Alternative for Apple Silicon',
    template: '%s | ArcBox'
  },
  description: 'The blazing-fast Docker Desktop alternative built natively for Apple Silicon. Run containers, Firecracker VMs, and sandboxed AI agents with 4x better performance. Open source.',
  keywords: ['docker', 'containers', 'apple silicon', 'firecracker', 'devcontainer', 'sandbox', 'AI agent', 'docker desktop alternative', 'mac', 'open source', 'OpenClaw'],
  authors: [{ name: 'ArcBox Team', url: 'https://arcbox.dev' }],
  metadataBase: new URL('https://arcbox.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arcbox.dev',
    siteName: 'ArcBox',
    title: 'ArcBox — Docker Desktop Alternative for Apple Silicon',
    description: 'The blazing-fast Docker Desktop alternative built natively for Apple Silicon. Run containers, Firecracker VMs, and sandboxed AI agents with 4× better performance.'
    // images: [{ url: '/arcbox-logo.png', width: 1200, height: 630, alt: 'ArcBox' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcBox — Docker Desktop Alternative for Apple Silicon',
    description: 'The blazing-fast Docker Desktop alternative built natively for Apple Silicon.',
    images: ['/arcbox-logo.png']
  },
  alternates: { canonical: 'https://arcbox.dev' }
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <NavbarMobileMenuPortalProvider id="global-navbar-mobile-menu-portal">
          <Layout>
            {children}
          </Layout>
        </NavbarMobileMenuPortalProvider>
      </body>
    </html>
  );
}
