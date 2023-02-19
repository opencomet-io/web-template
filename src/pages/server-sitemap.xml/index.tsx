import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const fields: Array<ISitemapField> = [];

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
