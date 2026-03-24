import 'server-only';

import { SiGithub, SiDiscord } from '@icons-pack/react-simple-icons';
import TwitterIcon from '@/components/icon-twitter';

export const socialLinks = [
  { name: 'X (formerly Twitter)', href: 'https://arcbox.link/twitter', icon: TwitterIcon },
  { name: 'GitHub', href: 'https://arcbox.link/github', icon: SiGithub },
  { name: 'Discord', href: 'https://arcbox.link/discord', icon: SiDiscord }
];

export const downloadLinks = {
  mac: {
    arm64: 'https://arcbox.link/dld-arm64'
  }
};
