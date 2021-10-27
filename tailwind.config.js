module.exports = {
  mode: 'jit',
  purge: [
    'src/js/*.js',
    'index.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'mine-shaft': '#252525',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
