/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 4px 0px #0000000E',
        'second': "0px 2px 9px 0px #0000000E",
        'btn': "0px 0px 1px 0px #0000004B",
        'dark': '0px 2px 4px 0px #0000000E'

      },
      screens: {
        'max-sm': { 'max': '480px' }, // Custom extra small screen
      },
    },
  },
  plugins: [],
};
