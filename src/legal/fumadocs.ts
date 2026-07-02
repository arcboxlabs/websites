import { remarkGfm, remarkHeading } from 'fumadocs-core/mdx-plugins';
import { applyMdxPreset, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';

import { z } from 'zod';

export const legal = defineDocs({
  dir: 'content/legal',
  docs: {
    schema: frontmatterSchema.extend({
      description: z.string(),
      updated: z.string()
    }),
    mdxOptions: applyMdxPreset({
      remarkPlugins: [remarkGfm, remarkHeading]
    })
  },
  meta: {
    schema: metaSchema
  }
});
