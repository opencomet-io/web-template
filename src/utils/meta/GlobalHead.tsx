import { FC } from 'react';
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';

import env from 'utils/env';

const GlobalHead: FC = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=0.5, maximum-scale=5"
      />
      <meta name="referrer" content="same-origin" />
      <meta name="robots" content="all" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="alternate" hrefLang="en" href="https://example.com" />
      <link rel="alternate" hrefLang="x-default" href="https://example.com" />

      <Partytown debug={env.DEBUG} forward={[]} />

      {/* PWA */}
      <meta name="application-name" content="OpenComet's Web Template" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://example.com" />
      <meta name="twitter:title" content="OpenComet's Web Template" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:title" content="OpenComet's Web Template" />
    </Head>
  );
};

export default GlobalHead;
