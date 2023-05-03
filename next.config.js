/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/term-and-condition': { page: '/term-and-condition' },
    };
  },
};

module.exports = nextConfig;