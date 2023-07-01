/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        'kombu': '414400',
        'olive': '626c25',
        'lemon': 'f0d876',
        'delft': '4472b8',
        'almond': 'f7f6ef'
      },
      fonts: {
        'sans': ['"Space Mono"','"Trebuchet MS"', 'ui-sans-serif'],
        'serif': ['BioRhyme', '"Courier New"', 'ui-system-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

