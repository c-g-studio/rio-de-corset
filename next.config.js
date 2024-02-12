/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // loader: 'custom',
    // loaderFile: './ImageLoader.js',
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
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
