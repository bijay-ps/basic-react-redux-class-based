/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-taupe': '#4C3A51',
        'deep-ruby': '#774360',
        'china-rose': '#B25068',
        'yellow-red': '#E7AB79',
      },
    },
  },
  plugins: [],
}
