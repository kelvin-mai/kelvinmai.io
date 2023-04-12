import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true },
    fontFamily: {
      body: ['Ubuntu', 'sans-serif'],
      'font-mono': ['Ubuntu Mono', 'Menlo', 'monospace'],
    },
    extend: {
      colors: {
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
} satisfies Config;
