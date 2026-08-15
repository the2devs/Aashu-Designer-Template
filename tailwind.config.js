/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6a1a21', // Deep Maroon
          light: '#8b2b34',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f3e5ab',
        },
        bg: {
          main: '#fcfcfc',
          alt: '#f4efe9',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
