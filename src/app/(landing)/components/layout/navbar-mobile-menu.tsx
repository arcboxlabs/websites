'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '@/ui/button';
import {
  Root as DropdownMenuRoot,
  Content as DropdownMenuContent,
  Trigger as DropdownMenuTrigger,
  Item as DropdownMenuItem,
  Separator as DropdownMenuSeparator,
  Portal as DropdownMenuPortal
} from '@radix-ui/react-dropdown-menu';
import { useRadixOpen } from '@/hooks/use-radix-open';
import NavbarMobileMenuTrigger from './navbar-mobile-menu-trigger';
import { useNavbarMobileMenuPortal } from '../../contexts/navbar-mobile-menu-portal';

interface NavbarMobileMenuProps {
  links: Array<{
    href: string,
    label: string,
    external?: boolean
  }>
}

export default function NavbarMobileMenu({ links }: NavbarMobileMenuProps) {
  const [isOpen, props] = useRadixOpen();

  const portalTarget = useNavbarMobileMenuPortal();

  return (
    <DropdownMenuRoot {...props}>
      <DropdownMenuTrigger asChild>
        <NavbarMobileMenuTrigger isOpen={isOpen} />
      </DropdownMenuTrigger>

      <DropdownMenuPortal container={portalTarget}>
        <DropdownMenuContent
          align="end"
          className="mt-8 mx-4 rounded-2xl border border-border bg-secondary/90 p-4 backdrop-blur-xl z-50"
        >
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer outline-none"
                  // prevent Next.js from scrolling to the "page" top, instead go to document top
                  scroll={false}
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator className="my-2 h-px bg-border/50" />

            <DropdownMenuItem asChild>
              <Button
                size="sm"
                asChild
                className="h-10 rounded-full bg-accent text-primary-foreground hover:bg-accent/90 cursor-pointer"
              >
                <Link href="#download">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
            </DropdownMenuItem>
          </nav>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
