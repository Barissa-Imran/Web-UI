module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#f1f1ff',
          default: '#60a5fa',
          dark: '#003248',
        },
        green: {
          light: '#ecfdf5',
          default: '#34d399',
          dark: '#5d7c8e',
        }
      },
      fontFamily: {
        segoe: ['Segoe UI', 'Frutiger Linotype', 'Helvetica Neue', 'sans-serif'],
      }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
