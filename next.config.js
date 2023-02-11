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
};

module.exports = nextConfig;
