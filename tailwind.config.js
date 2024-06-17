/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Baskerville, "Times New Roman", serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
