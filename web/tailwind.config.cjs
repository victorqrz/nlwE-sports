/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/Fundo.png')",
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 23.00%, #43E74D 33.94%, #E1D55D 44.57%)'
      }
    }
  },
  plugins: []
}
