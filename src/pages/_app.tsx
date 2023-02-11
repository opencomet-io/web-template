import type { FC } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalHead from 'utils/meta/GlobalHead';
import theme from 'utils/styled/theme';
import GlobalStyle from 'utils/styled/GlobalStyle';
import Layout from 'components/templates/Layout/Layout';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalHead />
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
