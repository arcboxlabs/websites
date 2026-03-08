import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'arcboxlabs',
  repo: 'docs',
  branch: 'master'
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'ArcBox DOCS', // TODO: arcbox logo + DOCS full uppercase
      url: '/docs'
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
  };
}
