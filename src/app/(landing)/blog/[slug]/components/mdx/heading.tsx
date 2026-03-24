import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.ComponentProps<'h1'> {
  asChild?: boolean
}

export function Heading({ asChild = false, id, children, className, ...props }: HeadingProps) {
  const Comp = asChild ? Slot : 'h1';

  return (
    <Comp
      id={id}
      className={cn('font-medium tracking-tight leading-[140%]', className)}
      {...props}
    >
      {id
        ? (
          <a href={`#${id}`} className="no-underline hover:underline">
            {children}
          </a>
        )
        : children}
    </Comp>
  );
}
