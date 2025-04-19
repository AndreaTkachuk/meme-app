/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: process.env.RAILWAY_ENVIRONMENT ? 'standalone' : 'export',
  experimental: {
    turbo: false // Disable Turbopack on Railway
  },
  images: {
    unoptimized: true // Disable image optimization if using external URLs
  },
  // images: {
  //   domains: ['i.kym-cdn.com'],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "i.kym-cdn.com",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "i.imgur.com",
  //       pathname: "/**",
  //     },
  //   ],
  // },
}

module.exports = nextConfig
