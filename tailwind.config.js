/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
    },
  },
  plugins: ['@tailwindcss/forms'],
}
