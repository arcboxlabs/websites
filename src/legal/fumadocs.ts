import { remarkGfm, remarkHeading } from 'fumadocs-core/mdx-plugins';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { applyMdxPreset, defineDocs } from 'fumadocs-mdx/config';

import { z } from 'zod';

export const legal = defineDocs({
  dir: 'content/legal',
  docs: {
    schema: pageSchema.extend({
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
