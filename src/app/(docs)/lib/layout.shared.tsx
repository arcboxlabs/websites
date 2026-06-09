import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import ArcBoxDesktopLogo from '@/components/arcbox-desktop-logo';
import { socialLinks } from '@/constants/links';

const defaultDocsGitHubUrl = 'https://github.com/arcboxlabs';
const docsSourceGitHubUrl = 'https://github.com/arcboxlabs/websites/blob/master/content/docs';

const docsGitHubUrls: Record<string, string> = {
  desktop: 'https://github.com/arcboxlabs/arcbox-desktop',
  platform: 'https://github.com/arcboxlabs/arcbox'
};

export function getDocsGitHubUrl(slugs?: readonly string[]) {
  const section = slugs?.[0];

  if (!section) {
    return defaultDocsGitHubUrl;
  }

  return docsGitHubUrls[section] ?? defaultDocsGitHubUrl;
}

export function getDocsSourceGitHubUrl(path: string) {
  return `${docsSourceGitHubUrl}/${path}`;
}

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="inline-flex items-center">
        <ArcBoxDesktopLogo width={24} height={24} />
        <span className="ml-2 font-semibold">ArcBox</span>
        <span className="ml-1 uppercase font-normal text-accent">Docs</span>
      </div>
    ),
    url: '/docs'
  },
  themeSwitch: {
    enabled: true,
    mode: 'light-dark-system'
  },
  links: [
    ...socialLinks.reduce<LinkItemType[]>(
      (acc, social) => {
        if (social.name === 'GitHub') {
          return acc; // covered by githubUrl
        }
        acc.push({
          type: 'icon',
          label: social.name,
          icon: <social.icon />,
          text: social.name,
          url: social.href
        });
        return acc;
      },
      []
    )
    // {
    //   text: 'Blog',
    //   url: '/blog'
    // }
  ],
  githubUrl: defaultDocsGitHubUrl
};
