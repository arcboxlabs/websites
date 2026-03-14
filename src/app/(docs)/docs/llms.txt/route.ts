import { source } from '@/docs/source';

export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = ['# Documentation', ''];
  for (const page of source.getPages()) {
    lines.push(`- [${page.data.title}](${page.url}): ${page.data.description}`);
  }
  return new Response(lines.join('\n'));
}
