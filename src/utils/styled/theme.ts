const colors = {};

const zIndexes = {
  debug: 9999,
};

const theme = { colors, zIndexes };

export type CustomTheme = typeof theme;
export { colors, zIndexes };
export default theme;
