import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true },
    fontFamily: {
      body: ['Ubuntu', 'sans-serif'],
      'font-mono': ['Ubuntu Mono', 'Menlo', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
