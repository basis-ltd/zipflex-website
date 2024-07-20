/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#3C3C3C',
        primary: '#4256E3',
        secondary: '#FFDA3A'
      }
    },
  },
  plugins: [],
}

