import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo, NextSeoProps } from 'next-seo';

import env from 'utils/env';

export interface Props
  extends Omit<NextSeoProps, 'languageAlternates' | 'canonical'> {
  title: string;
  description: string;
}

const PageHead: FC<Props> = ({ ...props }) => {
  const router = useRouter();

  const trailingPathname = router.pathname.replace(/^\/$/, '');

  const canonical =
    env.SITE_URL +
    (router.locale === router.defaultLocale ? '' : `/${router.locale}`) +
    trailingPathname;

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang={router.defaultLocale || 'en'}
          href={env.SITE_URL + trailingPathname}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={env.SITE_URL + trailingPathname}
        />

        {router.locales?.flatMap(locale =>
          locale === router.defaultLocale ? (
            []
          ) : (
            <link
              rel="alternate"
              hrefLang={locale}
              href={env.SITE_URL + `/${locale}` + trailingPathname}
              key={locale}
            />
          )
        )}
      </Head>

      <NextSeo canonical={canonical} {...props} />
    </>
  );
};

export default PageHead;
