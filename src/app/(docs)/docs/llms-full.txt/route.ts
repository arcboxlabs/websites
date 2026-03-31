import { getLLMText, source } from '@/docs/source';
import { fastStringArrayJoin } from 'foxts/fast-string-array-join';

export const dynamic = 'force-static';

export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(fastStringArrayJoin(scanned, '\n\n'));
}
