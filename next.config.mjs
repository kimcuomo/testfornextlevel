import pkg from '@next/bundle-analyzer';
  const withBundleAnalyzer = pkg({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {};

export default withBundleAnalyzer(nextConfig);