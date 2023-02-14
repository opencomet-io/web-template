import path from 'path';
import { ESLint } from 'eslint';

const buildEslintCommand = async files => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map(file => {
      return eslint.isPathIgnored(file);
    })
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);

  return `next lint --fix --max-warnings=0 --file ${filteredFiles
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  // '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
};
