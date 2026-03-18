import Link from 'next/link';
import ArcBoxDesktopLogo from '@/components/arcbox-desktop-logo';
import { GithubIcon, TwitterIcon } from 'lucide-react';

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const socialLinks = [
  { name: 'X', href: 'https://x.com/arcboxlabs', icon: TwitterIcon },
  { name: 'GitHub', href: 'https://github.com/arcbox', icon: GithubIcon },
  { name: 'Discord', href: 'https://discord.gg/arcbox', icon: DiscordIcon }
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      // { name: 'Features', href: '#features' },
      // { name: 'Performance', href: '#speed' },
      { name: 'ArcBox Desktop', href: '/' },
      // { name: 'Download', href: '#download' },
      { name: 'Changelog', href: 'https://github.com/arcboxlabs/arcbox-desktop/releases' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Quick Start', href: '/docs/desktop' }
      // { name: 'API Reference', href: '/docs/api' },
    ]
  },
  {
    title: 'Company',
    links: [
      // { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' }
      // { name: 'Careers', href: '/careers' },
      // { name: 'Contact', href: '/contact' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl py-16 px-4">
        <div className="grid gap-8 grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <ArcBoxDesktopLogo width={32} height={32} aria-hidden="true" focusable="false" />
              {/* <Image
                src="/arcbox-logo.svg"
                alt="ArcBox"
                width={32}
                height={32}
                className="rounded-lg"
              /> */}
              <span className="text-lg font-semibold text-foreground">
                ArcBox Desktop
              </span>
            </Link>
            <p className="mt-4 md:max-w-sm text-sm leading-relaxed text-muted-foreground">
              The blazing-fast Docker Desktop alternative built for macOS and
              Apple Silicon. Containers, VMs, and sandboxes—without the chaos.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ArcBox. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
