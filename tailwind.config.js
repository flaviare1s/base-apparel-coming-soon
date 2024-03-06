/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'rosa-claro': '#F8BFBF',
        'dark': '#423A3A',
        'pele': '#CE9898',
        'rosa': '#EE8B8B',
        'light': '#DBDBDB',
        'erro': '#F96464',
      },
      backgroundImage: {
        'bg-desktop': ["url('../images/bg-pattern-desktop.svg')"],
      },
    },
  },
  plugins: [],
}

