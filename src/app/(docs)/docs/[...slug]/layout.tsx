import { source } from '@/docs/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions, getDocsGitHubUrl } from '@docs/lib/layout.shared';
import type { ReactNode } from 'react';

export default async function Layout({
  children,
  params
}: {
  children: ReactNode,
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;

  return (
    <DocsLayout
      {...baseOptions}
      githubUrl={getDocsGitHubUrl(slug)}
      tree={source.getPageTree()}
      tabMode="navbar"
    >
      {children}
    </DocsLayout>
  );
}
