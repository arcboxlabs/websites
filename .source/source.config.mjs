// source.config.ts
import { rehypeToc, remarkHeading, remarkImage } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import remarkGfm from "remark-gfm";
import { z } from "zod";
var blog = defineDocs({
  dir: "content/blog",
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
          return val.toISOString().split("T")[0];
        }
        return val;
      })
    }),
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "vesper",
        dark: "vesper"
      },
      colorReplacements: {
        "#99ffe4": "#ff5e4f",
        "#ffc799": "#FFF"
      }
    },
    remarkPlugins: [remarkGfm, remarkHeading, [remarkImage, { useImport: false }]],
    rehypePlugins: [rehypeToc]
  }
});
export {
  blog,
  source_config_default as default
};
