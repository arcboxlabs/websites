import { Slot } from '@radix-ui/react-slot';

interface HeadingProps extends React.ComponentProps<'h1'> {
  asChild?: boolean
}

export function Heading({ asChild = false, id, children, ...props }: HeadingProps) {
  const Comp = asChild ? Slot : 'h1';

  return (
    <Comp
      id={id}
      className="font-medium tracking-tight leading-[140%]"
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
