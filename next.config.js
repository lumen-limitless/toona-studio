const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  output: undefined,
  images: {
    deviceSizes: [375, 800, 1200, 1800],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            dimensions: false,
          },
        },
      ],
    })

    return config
  },
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)
