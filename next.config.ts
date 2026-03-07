import { createMDX } from 'fumadocs-mdx/next';

export default createMDX({
  configPath: './source.config.ts'
})({
  output: 'export',
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    // required for static export
    unoptimized: true
  }
});
