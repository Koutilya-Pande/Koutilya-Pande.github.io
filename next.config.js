/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
};

module.exports = nextConfig;
