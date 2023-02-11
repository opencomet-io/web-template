import type { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from 'utils/styled/theme';
import GlobalStyle from 'utils/styled/GlobalStyle';
import Layout from 'components/templates/Layout/Layout';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="same-origin" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default CustomApp;
