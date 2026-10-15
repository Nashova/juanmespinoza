/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/template.html', './404.html', './assets/js/render.js', './assets/js/app.js'],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF8',
        accent: { DEFAULT: '#D4A373', dark: '#8A5A2B', soft: '#F6EADC' },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
