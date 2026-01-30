/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '',
};

module.exports = nextConfig;
