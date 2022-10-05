/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app-clr':'#1a1a1a',
        'boxshadow':'0 1px 10px 0 rgb(0 0 0 / 50%)'
      }
    },
  },
  plugins: [],
}