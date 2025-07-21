/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['api.mapbox.com'],
  },
  env: {
    MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
}

module.exports = nextConfig
