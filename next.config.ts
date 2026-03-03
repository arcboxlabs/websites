import { withStyleX } from 'stylex-webpack/next';
import { createMDX } from 'fumadocs-mdx/next';

export default createMDX({
  configPath: './source.config.ts'
})(withStyleX()({
  output: 'export',
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    // required for static export
    unoptimized: true
  }
}));
