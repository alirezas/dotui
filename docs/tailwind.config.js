/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{md,mdx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanBakh: ['Yekan Bakh', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    process.env.NODE_ENV === 'production' ? require('@noqte/ui') : require('../src/index')
  ]
}
