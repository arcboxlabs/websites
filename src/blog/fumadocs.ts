import { rehypeToc, remarkHeading, remarkImage, remarkMdxMermaid, remarkGfm } from 'fumadocs-core/mdx-plugins';
import { applyMdxPreset, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { remarkReadingTime } from './remark-reading-time';

import { z } from 'zod';

export const blog = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: frontmatterSchema.extend({
      published: z.boolean().optional().default(false),
      category: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      author: z.array(z.string().optional()),
      cover: z.string().optional(),
      hero: z.string().optional(),
      date: z.union([z.string(), z.date()]).transform((val) => {
        if (val instanceof Date) {
          return val.toISOString().split('T')[0];
        }
        return val;
      })
    }),
    postprocess: {
      includeProcessedMarkdown: true,
      valueToExport: ['readingTime']
    },
    mdxOptions: applyMdxPreset({
      remarkPlugins: [remarkMdxMermaid, remarkGfm, remarkHeading, remarkReadingTime, [remarkImage, { useImport: false }]],
      rehypePlugins: [rehypeToc]
    })
  },
  meta: {
    schema: metaSchema
  }
});
