/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
        mono: ['var(--font-ubuntu-mono)'],
      },
      colors: {
        azure: {
          50: '#edfbff',
          100: '#d6f5ff',
          200: '#b5efff',
          300: '#83e8ff',
          400: '#48d8ff',
          500: '#1ebcff',
          600: '#069fff',
          700: '#008cff',
          800: '#086ac5',
          900: '#0d5b9b',
          950: '#0e375d',
        },
        waikawa: {
          50: '#f3f6fa',
          100: '#e8f1f7',
          200: '#d6e3ef',
          300: '#bdcfe4',
          400: '#a1b7d8',
          500: '#89a0cb',
          600: '#7184ba',
          700: '#6272a4',
          800: '#4f5d84',
          900: '#444e6b',
          950: '#282e3e',
        },
        perfume: {
          50: '#f9f5ff',
          100: '#f1e9fe',
          200: '#e5d6fe',
          300: '#d2b6fc',
          400: '#bd93f9',
          500: '#9b5af2',
          600: '#8439e4',
          700: '#7027c9',
          800: '#6025a4',
          900: '#4f1f84',
          950: '#330a61',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
