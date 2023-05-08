/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '375px',
      md: '800px',
      lg: '1200px',
      xl: '1920px',
    },

    extend: {
      colors: {
        light: '#f9f9f9',
        dark: '#2e3338',
        indigo: {
          DEFAULT: '#6978FF',
          500: '#6978FF',
          600: '#616FE5',
        },
      },

      fontWeight: {
        kindabold: '500',
        kindalight: '300',
      },

      fontSize: {
        base: ['1rem', '22px'],
        lg: ['1.125rem', '24px'],
        '2xl': ['1.5rem', '33px'],
        '4xl': ['2.5rem', '49px'],
        '5xl': ['3rem', '66px'],
        '6xl': ['3.75rem', '87px'],
        '7xl': ['4.5rem', '98px'],
        '8xl': ['5rem', '109px'],
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
