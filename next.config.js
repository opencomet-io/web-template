process.env.I18NEXT_DEFAULT_CONFIG_PATH = `${__dirname}/next-i18next.config.js`;

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  i18n,
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push(svgRule);
    return config;
  },
};

const svgRule = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: { exportType: 'named', namedExport: 'SVG' },
    },
  ],
};

// eslint-disable-next-line import/order
const withPWA = require('next-pwa')({
  dest: 'public',
  disable:
    process.env.NEXT_PUBLIC_ENABLE_PWA !== 'true' ||
    process.env.NODE_ENV === 'development',
});

module.exports = withPWA(nextConfig);
