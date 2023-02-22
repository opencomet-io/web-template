const i18nextConfig = require('./next-i18next.config');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`],
  },
  alternateRefs: i18nextConfig.i18n.locales.flatMap(locale =>
    locale === i18nextConfig.i18n.defaultLocale
      ? []
      : {
          hreflang: locale,
          href: process.env.NEXT_PUBLIC_SITE_URL + `/${locale}`,
        }
  ),
};
