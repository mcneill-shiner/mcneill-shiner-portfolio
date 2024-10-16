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
        'sunshine': '#e4c34e',
        'oxblood': '#310101',
        'lapis': '#364DA1',
        'crimson': '#B9200A'
      },
      fontFamily: {
        'sans': ['"Schibsted Grotesk"','"Trebuchet MS"', 'ui-sans-serif'],
        'serif': ['"Zilla Slab"', '"Garamond"', 'ui-system-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

