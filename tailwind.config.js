module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ['Ubuntu', 'sans-serif'],
      'font-mono': ['Ubuntu Mono', 'Menlo', 'monospace'],
    },
    colors: {
      black: '#282a36',
      white: '#f8f8f2',
      dark: '#6272a4',
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
