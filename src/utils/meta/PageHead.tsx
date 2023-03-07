import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo, NextSeoProps } from 'next-seo';

export interface Props extends Omit<NextSeoProps, 'languageAlternates' | 'canonical'> {
  title: string;
  description: string;
}

const PageHead: FC<Props> = ({ ...props }) => {
  const router = useRouter();

  const trailingPathname = router.pathname.replace(/^\/$/, '');

  const canonical =
    process.env.NEXT_PUBLIC_SITE_URL +
    (router.locale === router.defaultLocale ? '' : `/${router.locale}`) +
    trailingPathname;

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang={router.defaultLocale || 'en'}
          href={process.env.NEXT_PUBLIC_SITE_URL + trailingPathname}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={process.env.NEXT_PUBLIC_SITE_URL + trailingPathname}
        />

        {router.locales?.flatMap(locale =>
          locale === router.defaultLocale ? (
            []
          ) : (
            <link
              rel="alternate"
              hrefLang={locale}
              href={process.env.NEXT_PUBLIC_SITE_URL + `/${locale}` + trailingPathname}
              key={`link-alt-${locale}`}
            />
          )
        )}
      </Head>

      <NextSeo canonical={canonical} {...props} />
    </>
  );
};

export default PageHead;
