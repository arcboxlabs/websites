'use client';

import { createContextState } from 'foxact/context-state';

const [PortalDOMProvider, useNavbarMobileMenuPortal, useSetNavbarMobileMenuPortal] = createContextState<HTMLElement | null>(null);

export interface NavbarMobileMenuPortalRootProps extends React.PropsWithChildren {
  id: string
}

function ActualPortalRoot({ id }: { id: string }) {
  const setNavbarMobileMenuPortal = useSetNavbarMobileMenuPortal();

  return (
    <div id={id} ref={setNavbarMobileMenuPortal} />
  );
}

/**
 * I want to inject global style for styling Radix Popover Content Wrapper
 *
 * But I also need to scope my global style specifically for the mobile menu, otherwise it will affect other popovers in the app (e.g. blog post filter dropdown)
 *
 * That's why I need to create a separate portal root for the mobile menu, and inject global style only for that portal root
 */
export function NavbarMobileMenuPortalProvider({ children, id }: NavbarMobileMenuPortalRootProps) {
  return (
    <PortalDOMProvider>
      {children}
      <ActualPortalRoot id={id} />
    </PortalDOMProvider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context
export { useNavbarMobileMenuPortal };
