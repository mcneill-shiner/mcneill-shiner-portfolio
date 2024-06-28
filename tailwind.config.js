/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        'kombu': '#626c25',
        'almond': '#f7f6ef',
        'kraft': '#b89765',
        'pear': '#bbb45b',
        'cameo': '#e7a491',
        'sunshine': '#eic667'
      },
      fontFamily: {
        'sans': ['"Inter"','"Trebuchet MS"', 'ui-sans-serif'],
        'serif': ['Bogart', '"Garamond"', 'ui-system-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

