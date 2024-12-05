/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/dosbox-ui/src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
}

