module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ['Ubuntu', 'sans-serif'],
      'font-mono': ['Ubuntu Mono', 'Menlo', 'monospace'],
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      '2xl': ' 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      none: 'none',
    },
    colors: {
      'real-white': '#fff',
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
    extend: {
      backgroundColor: {
        none: 'transparent',
      },
      inset: {
        '1/2': '50%',
      },
      opacity: {
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      },
      fontSize: {
        '8xl': '8rem',
      },
      screens: {
        xs: '425px',
        '2k': '1920px',
        '4k': '2560px',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
        '1000': '1000px',
      },
    },
  },
  variants: {},
  plugins: [],
};
