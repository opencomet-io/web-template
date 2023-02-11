import type { FC } from 'react';
import Head from 'next/head';

const GlobalHead: FC = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="referrer" content="same-origin" />
      <meta name="robots" content="all" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default GlobalHead;
