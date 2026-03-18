import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import { renderMermaidSVG } from 'beautiful-mermaid';
import { useMemo } from 'react';

export function Mermaid({ chart }: { chart: string }) {
  const svg = useMemo(() => {
    try {
      return renderMermaidSVG(chart, {
        bg: 'var(--color-fd-background)',
        fg: 'var(--color-fd-foreground)',
        interactive: true,
        transparent: true
      });
    } catch (e) {
      // eslint-disable-next-line no-console -- for error logging
      console.error('Failed to render Mermaid chart:', e);
      return null;
    }
  }, [chart]);

  if (svg) {
    // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml -- mermaid
    return <div dangerouslySetInnerHTML={{ __html: svg }} />;
  }

  return (
    <CodeBlock title="Mermaid">
      <Pre>{chart}</Pre>
    </CodeBlock>
  );
}
