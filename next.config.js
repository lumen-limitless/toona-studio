/** @type {import('next').NextConfig} */
module.exports = {
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

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(module.exports)
