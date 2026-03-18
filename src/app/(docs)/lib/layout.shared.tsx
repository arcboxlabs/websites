import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import ArcBoxDesktopLogo from '@/components/arcbox-desktop-logo';

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
        <span className="ml-1 uppercase font-normal">Docs</span>
      </div>
    ),
    url: '/docs'
  },
  links: [
    // {
    //   text: 'Blog',
    //   url: '/blog'
    // }
  ],
  githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
};
