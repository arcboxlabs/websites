import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import ArcBoxLogo from '@/components/arcbox-logo';

export const gitConfig = {
  user: 'arcboxlabs',
  repo: 'docs',
  branch: 'master'
};

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="inline-flex items-center">
        <ArcBoxLogo width={24} height={24} />
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
