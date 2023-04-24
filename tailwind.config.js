const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '800px',
      lg: '1200px',
      xl: '1800px',
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

      fontFamily: {
        sans: ['var(--font-manrope)', ...fontFamily.sans],
      },

      fontWeight: {
        kindabold: '500',
        kindalight: '300',
      },

      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
