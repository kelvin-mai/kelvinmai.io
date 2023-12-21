/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
