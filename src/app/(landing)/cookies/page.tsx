import type { Metadata } from 'next';
import { LegalPage } from '../components/legal-page';
import { getLegalPage } from '@/legal/cms';
import { createTwitter, landingOpenGraph } from '@/lib/metadata';
import { getMDXComponents } from '@/mdx-components';

const page = getLegalPage('cookies');

export const metadata: Metadata = {
  title: page.data.title,
  description: page.data.description,
  alternates: { canonical: '/cookies' },
  openGraph: landingOpenGraph({
    type: 'website',
    url: 'https://arcbox.dev/cookies',
    title: page.data.title,
    description: page.data.description
  }),
  twitter: createTwitter({ title: page.data.title, description: page.data.description })
};

export default function CookiePolicyPage() {
  const MDXContent = page.data.body;

  return (
    <LegalPage title={page.data.title} description={page.data.description} updated={page.data.updated}>
      <MDXContent components={getMDXComponents()} />
    </LegalPage>
  );
}
