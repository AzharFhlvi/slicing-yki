/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'display': 'Poppins, sans-serif',
    },
    colors: {
      primary: "#F14B8F",
    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

