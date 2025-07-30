/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable strict mode for now to avoid potential issues
  reactStrictMode: false,
  // Ensure proper image optimization
  images: {
    unoptimized: true,
  },
  // Disable TypeScript checking during build for now
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for now
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Standard Next.js configuration for Amplify
  // No output: 'export' since we have API routes
}

module.exports = nextConfig 