/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Active la génération statique pour GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
