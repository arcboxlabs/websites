'use client';

import { useState } from 'react';

export function useRadixOpen(): readonly [isOpen: boolean, radixProps: { open: boolean, onOpenChange: (open: boolean) => void }] {
  const [isOpen, setIsOpen] = useState(false);

  return [isOpen, { open: isOpen, onOpenChange: setIsOpen }] as const;
}
