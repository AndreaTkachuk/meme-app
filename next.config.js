/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['i.kym-cdn.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.kym-cdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
