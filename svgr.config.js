module.exports = {
  dimensions: false,
  expandProps: 'end',
  ref: true,
  svgo: true,
  svgoConfig: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      'prefixIds',
      'removeDimensions',
      'sortAttrs',
    ],
  },
};
