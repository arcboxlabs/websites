import { Menu, X } from 'lucide-react';

export interface NavbarMobileMenuTriggerProps extends React.ComponentProps<'button'> {
  isOpen: boolean
}

export default function NavbarMobileMenuTrigger({ isOpen, ...props }: NavbarMobileMenuTriggerProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      className="md:hidden cursor-pointer"
      type="button"
      aria-label="Toggle mobile menu"
      {...props}
    >
      {isOpen
        ? (
          <X className="h-5 w-5 text-foreground" />
        )
        : (
          <Menu className="h-5 w-5 text-foreground" />
        )}
    </button>
  );
};
