'use client';

import SearchDialog from '@docs/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <RootProvider
      theme={{ enabled: true, enableSystem: true }}
      search={{ SearchDialog }}
    >
      {children}
    </RootProvider>
  );
}
