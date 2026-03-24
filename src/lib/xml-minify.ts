export function xmlMinify(xml: string): string {
  return xml.replaceAll(/>\s+</g, '><');
}
