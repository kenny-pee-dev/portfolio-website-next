/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        400: '400ms',
      },
      ringColor: {
        DEFAULT: '#FFF', // default ring color
        white: '#ffffff',
      },
      colors: {
        'ash-grey': '#252934',
        'ash-grey-hover': '#131B23',
        'primary-white': '#FFF',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
      ringColor: ['hover', 'focus'],
      ringWidth: ['hover', 'focus'],
      ringOpacity: ['hover', 'focus'],
      ringOffsetColor: ['hover', 'focus'],
    },
  },
  plugins: [],
};
