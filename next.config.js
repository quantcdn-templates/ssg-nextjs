/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Generate clean URLs without .html extension
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
