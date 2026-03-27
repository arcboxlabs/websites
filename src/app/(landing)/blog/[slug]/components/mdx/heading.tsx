import { Root as SlotRoot, Slottable } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { LinkIcon } from 'lucide-react';

interface HeadingProps extends React.ComponentProps<'h1'> {
  asChild?: boolean
}

export function Heading({ asChild = false, id, children, className, ...props }: HeadingProps) {
  const Comp = asChild ? SlotRoot : 'h1';

  return (
    <Comp
      id={id}
      className={cn('font-medium tracking-tight leading-[140%]', asChild ? '' : className)}
      {...props}
    >
      {
        id
          ? (
            <a href={`#${id}`} className={cn('no-underline hover:underline flex flex-row items-center gap-2', asChild ? className : '')}>
              <Slottable>{children}</Slottable>
              <LinkIcon className="size-3.5 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100" />
            </a>
          )
          : <Slottable>{children}</Slottable>
      }
    </Comp>
  );
}
