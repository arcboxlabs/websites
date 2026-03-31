import { source } from '@/docs/source';
import { fastStringArrayJoin } from 'foxts/fast-string-array-join';

export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = ['# Documentation', ''];
  for (const page of source.getPages()) {
    lines.push(`- [${page.data.title}](${page.url}): ${page.data.description}`);
  }
  return new Response(fastStringArrayJoin(lines, '\n'));
}
