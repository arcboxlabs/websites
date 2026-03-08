'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/ui/button';
import { Download } from 'lucide-react';
import { Github, Twitter } from 'lucide-react';
import HeaderScrollContainer from './header-scroll-container';
import { lazy, Suspense } from 'react';
import NavbarMobileMenuTrigger from './navbar-mobile-menu-trigger';

const NavbarMobileMenu = lazy(() => import('./navbar-mobile-menu'));

const DEFAULT_LINKS = [
  { href: '/', label: 'ArcBox Desktop' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://docs.arcbox.dev', label: 'Docs', external: true }
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <HeaderScrollContainer>
        <div className="flex h-14 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/arcbox-logo.png"
              alt="ArcBox"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-base font-semibold text-foreground">
              ArcBox
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {
              DEFAULT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))
            }
          </nav>

          <div className="hidden items-center gap-1 md:flex">
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <Link
                href="https://github.com/arcbox-dev"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <Link
                href="https://twitter.com/arcboxdev"
                target="_blank"
                aria-label="X / Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <div className="mx-2 h-4 w-px bg-border" />
            <Button
              size="sm"
              asChild
              className="h-9 rounded-full bg-accent px-5 text-primary-foreground hover:bg-accent/90"
            >
              <Link href="#download">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>

          <div className="md:hidden navbar-dropdown-container">
            <Suspense fallback={<NavbarMobileMenuTrigger isOpen={false} />}>
              <NavbarMobileMenu links={DEFAULT_LINKS} />
            </Suspense>
          </div>
        </div>
      </HeaderScrollContainer>
    </header>
  );
}
