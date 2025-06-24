const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'base': '#1d1d1d',
        'nav-bar': '#252627',
      },
      fontFamily: {
        // Overwrite the default 'mono' font family
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Fira Mono', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}