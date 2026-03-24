import Link from 'next/link';
import ArcBoxDesktopLogo from '@/components/arcbox-desktop-logo';
import { downloadLinks, socialLinks } from '@/constants/links';

const footerLinks = [
  {
    title: 'Product',
    links: [
      // { name: 'Features', href: '#features' },
      // { name: 'Performance', href: '#speed' },
      { name: 'ArcBox Desktop', href: '/' },
      { name: 'Download', href: downloadLinks.mac.arm64, external: true },
      { name: 'Changelog', href: 'https://github.com/arcboxlabs/arcbox-desktop/releases', external: true }
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
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
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
