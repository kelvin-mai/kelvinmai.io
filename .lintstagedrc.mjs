/** @type {import('lint-staged').Configuration} */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.mdx': 'prettier --write',
};

export default config;
