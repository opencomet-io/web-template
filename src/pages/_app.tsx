import { FC } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';

import env from 'utils/env';
import GlobalHead from 'utils/meta/GlobalHead';
import theme from 'utils/styled/theme';
import GlobalStyle from 'utils/styled/GlobalStyle';
import Layout from 'components/templates/Layout/Layout';

if (env.API_MOCKING === 'enabled') {
  require('../mocks');
}

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

export default appWithTranslation(CustomApp);
