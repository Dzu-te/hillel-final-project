/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    extend: {

      screens: {
        'dssd': '1440px',
        'dshd': '1900px',
      },

      colors: {
        'header-blue': '#585982',
        'text-primary-red': '#F0145A',
        'main-blue': '#313264',
        'main-h2-color': '#24A3FF',
        'first-underline': '#CACADB',
        'second-underline': '#E7E7F2',
        'main-h3': '#323264',
        'hillel-bg': '#1C4280',
        'wanna-biz': '#143646',
        'tapgerine': '#F48B30',
        'three-d-look': '#9E4DC3',
        'orangear': '#FD9339',
        'adtelligent': '#E2E2E4',
        'footer-bg': '#F5F5FA',
        'color-tel': '#46466E',
        'copyright': '#B3B3BA',
        'clickky': '#C71C36',
        'eco-leasing': '#DCF3F9',
        'infa-tek': '#EAEAEA',
        'sity-park': '#282240',
        'art-print': '#1D4568',
      },
    },
  },
  plugins: [

  ],
};

