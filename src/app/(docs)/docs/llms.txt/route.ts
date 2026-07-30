import { source } from '@/docs/source';
import { fastStringArrayJoin } from 'foxts/fast-string-array-join';

export const dynamic = 'force-static';

export function GET() {
  const lines: string[] = ['# Documentation', ''];
  const pages = source.getPages();
  for (let i = 0, len = pages.length; i < len; i++) {
    const page = pages[i];
    lines.push(`- [${page.data.title}](${page.url}): ${page.data.description}`);
  }
  return new Response(fastStringArrayJoin(lines, '\n'));
}
