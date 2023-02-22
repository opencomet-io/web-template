import React from 'react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line no-restricted-imports
import theme from '../src/utils/styled/theme';
// eslint-disable-next-line no-restricted-imports
import GlobalStyle from '../src/utils/styled/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
