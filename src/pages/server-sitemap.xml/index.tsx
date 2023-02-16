import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

import env from 'utils/env';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const fields: Array<ISitemapField> = [
    {
      loc: env.SITE_URL || 'https://example.com',
      lastmod: new Date().toISOString(),
    },
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
