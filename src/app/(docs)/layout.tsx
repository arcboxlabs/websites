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
  metadataBase: new URL('https://arcbox.dev/docs')
};
