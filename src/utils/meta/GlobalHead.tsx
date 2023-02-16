import { FC } from 'react';
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';

import env from 'utils/env';

const GlobalHead: FC = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="referrer" content="same-origin" />
      <meta name="robots" content="all" />
      <link rel="icon" href="/favicon.ico" />
      {/* TODO: Add links to page in other languages */}
      {/*<link rel="alternate" hrefLang="en" href="https://example.com" />*/}
      {/*<link rel="alternate" hrefLang="x-default" href="https://example.com" />*/}
      <Partytown debug={env.DEBUG} forward={[]} />
    </Head>
  );
};

export default GlobalHead;
