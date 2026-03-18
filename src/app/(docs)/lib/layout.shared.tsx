import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import ArcBoxDesktopLogo from '@/components/arcbox-desktop-logo';
import { socialLinks } from '../../../constants/social-links';

export const gitConfig = {
  user: 'arcboxlabs',
  repo: 'websites',
  branch: 'master'
};

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
  githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
};
