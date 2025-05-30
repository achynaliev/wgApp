/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f8f0',
          100: '#e4f1e1',
          200: '#cce3c5',
          300: '#aad19e',
          400: '#85bc74',
          500: '#68a352',
          600: '#4d8239',
          700: '#3d682e',
          800: '#335327',
          900: '#2b4522',
          950: '#162711',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} 