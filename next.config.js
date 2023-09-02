/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {},
  images: {
    domains: [
      'picsum.photos', // Demo / local only
      'links.papareact.com',
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
