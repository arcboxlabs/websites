import { withSentryConfig } from '@sentry/nextjs';
import { createMDX } from 'fumadocs-mdx/next';

const nextConfig = createMDX({
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

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true
  }
});
