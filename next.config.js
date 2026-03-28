/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [],
  },
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
