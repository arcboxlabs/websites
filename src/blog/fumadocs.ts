import { rehypeToc, remarkHeading, remarkImage, remarkGfm } from 'fumadocs-core/mdx-plugins';
import { defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';

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
      includeProcessedMarkdown: true
    },
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkHeading, [remarkImage, { useImport: false }]],
      rehypePlugins: [rehypeToc]
    }
  },
  meta: {
    schema: metaSchema
  }
});
