/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // loader: 'custom',
    // loaderFile: './ImageLoader.js',
    domains: ['localhost', 'rio-de-corset-production.up.railway.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rio-de-corset-production.up.railway.app',
        port: '1337',
      },
    ],

    formats: ['image/webp'],
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
