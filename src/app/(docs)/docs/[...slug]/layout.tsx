import { source } from '@/docs/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@docs/lib/layout.shared';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.getPageTree()}
      tabMode="navbar"
    >
      {children}
    </DocsLayout>
  );
}
