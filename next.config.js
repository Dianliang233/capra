/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
