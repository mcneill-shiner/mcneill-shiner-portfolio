/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        'kombu': '#414400',
        'olive': '#626c25',
        'lemon': '#f2e69a',
        'delft': '#4e5fe2',
        'almond': '#f7f6ef'
      },
      fontFamily: {
        'sans': ['"Space Mono"','"Trebuchet MS"', 'ui-sans-serif'],
        'serif': ['BioRhyme', '"Courier New"', 'ui-system-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

