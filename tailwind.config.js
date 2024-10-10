/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        'kombu': '#5A5007',
        'almond': '#f7f6ef',
        'kraft': '#c0a377',
        'pear': '#bbb45b',
        'cameo': '#e7a491',
        'sunshine': '#e4c34e',
        'oxblood': '#310101',
        'lapis': '#364DA1'
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

