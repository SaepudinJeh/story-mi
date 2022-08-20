const defaulTheme = require('tailwindcss/defaultTheme')

module.exports = {
  screens: {
    xxs: "300px",
    xs: '400px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  content: [
    "./index.html",
    "./src/**/*.vue"
  ],
  theme: {
    fontFamily: {
      'caveat': ['Caveat', 'sans'],
      'title': ['Square Peg', 'sans'],
      'sans': ['Comfortaa', ...defaulTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}
