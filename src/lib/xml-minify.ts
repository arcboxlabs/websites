const rXmlSpace = />\s+</g;
export function xmlMinify(xml: string): string {
  return xml.replaceAll(rXmlSpace, '><');
}
