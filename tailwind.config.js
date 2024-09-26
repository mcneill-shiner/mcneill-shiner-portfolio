/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        'kombu': '#626c25',
        'almond': '#f7f6ef',
        'kraft': '#c0a377',
        'pear': '#bbb45b',
        'cameo': '#e7a491',
        'sunshine': '#e1c667',
        'oxblood': '#310101'
      },
      fontFamily: {
        'sans': ['"Inter"','"Trebuchet MS"', 'ui-sans-serif'],
        'serif': ['"Zilla Slab"', '"Garamond"', 'ui-system-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

