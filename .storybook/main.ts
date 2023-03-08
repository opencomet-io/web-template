import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: false,
      },
    },
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    storyStoreV7: true,
    buildStoriesJson: true,
  },
  webpackFinal: async config => {
    const imageRule = config.module?.rules?.find(rule => (rule.test as RegExp).test('.svg'));
    if (!imageRule) return config;

    imageRule.exclude = /\.svg$/;
    config.module?.rules?.push(SVGRRule);

    return config;
  },
};

const SVGRRule = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: { exportType: 'named', namedExport: 'SVG' },
    },
  ],
};

module.exports = config;
