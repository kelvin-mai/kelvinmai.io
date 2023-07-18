/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
        mono: ['var(--font-ubuntu-mono)'],
      },
      colors: {
        microsoft: {
          blue: '#008cff',
        },
        dracula: {
          black: '#282a36',
          white: '#f8f8f2',
          dark: '#44475a',
          'dark-purple': '#6272a4',
          blue: '#008cff',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        },
      },
    },
  },
  plugins: [],
};
