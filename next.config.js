/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true },
  // Legacy exported URLs have explicit equivalents; unknown URLs remain real 404s.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...['about', 'service', 'locations', 'article', 'appointments', 'privacy-policy', 'charleslane'].map(page => ({
        source: `/${page}.html`, destination: `/${page}`, permanent: true,
      })),
      { source: '/orthodontists', destination: '/about', permanent: true },
      { source: '/orthodontists.html', destination: '/about', permanent: true },
    ];
  },
  eslint: { ignoreDuringBuilds: true },
};
module.exports = nextConfig;
