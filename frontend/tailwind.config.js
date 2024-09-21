/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Ramabhadra': ['"Ramabhadra"'],
      },

    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'D9D9D9': '#D9D9D9',
    //   white: 'white',
    //   'cardBack': 'rgba(217, 217, 217, 0.2)',
    // },
  },
  plugins: [],
}