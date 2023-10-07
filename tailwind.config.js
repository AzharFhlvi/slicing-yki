/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: "#F14B8F",
    },
    extend: {
      fontFamily: {
        display: 'Poppins, ui-serif',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

