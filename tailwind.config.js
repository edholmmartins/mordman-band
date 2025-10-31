/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      heading: ['var(--font-oswald)', 'sans-serif'],
      body: ['var(--font-roboto-condensed)', 'sans-serif'],
    },
    letterSpacing: {
      widest: '0.15em',
    },
  },
},
  plugins: [],
};