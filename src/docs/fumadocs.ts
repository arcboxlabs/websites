import { defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { rehypeToc, remarkHeading, remarkImage, remarkGfm, remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true
    },
    mdxOptions: {
      remarkPlugins: [remarkMdxMermaid, remarkGfm, remarkHeading, [remarkImage, { useImport: false }]],
      rehypePlugins: [rehypeToc]
    }
  },
  meta: {
    schema: metaSchema
  }
});
