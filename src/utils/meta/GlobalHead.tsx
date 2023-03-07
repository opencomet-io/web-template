import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Partytown } from '@builder.io/partytown/react';

import vars from 'utils/vars';
import theme from 'utils/styled/theme';

const GlobalHead: FC = () => {
  const router = useRouter();

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=0.3, maximum-scale=5"
      />
      <meta name="referrer" content="same-origin" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* PWA */}
      <meta name="application-name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={theme.colors.primary} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <meta property="og:locale" content={router.locale} />
      {router.locales?.flatMap(locale =>
        locale === router.locale ? (
          []
        ) : (
          <meta property="og:locale:alternate" content={locale} key={`og-alt-${locale}`} />
        )
      )}

      <Partytown debug={vars.DEBUG} forward={[]} />
    </Head>
  );
};

export default GlobalHead;
