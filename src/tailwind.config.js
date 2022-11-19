const plugin = require('tailwindcss/plugin')
const DEFAULT_OPTIONS = require('./config/default-options')
const fontSizeCalculator = require('./utils/fontsize-calculator')
const spacingCalculator = require('./utils/spacing-calculator')
const extendedColors = require('./extend/colors')
const extendedBoxShadows = require('./extend/box-shadows')

module.exports = {
  content: [{ raw: '' }],
  plugins: [
    plugin.withOptions(
      (options) => {
        const settings = { ...DEFAULT_OPTIONS, ...options }
        return ({ addBase }) => {
          addBase({
            html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` }
          })
        }
      },
      (options) => {
        const settings = { ...DEFAULT_OPTIONS, ...options }
        return {
          theme: {
            spacing: spacingCalculator(settings),
            fontSize: fontSizeCalculator(settings),
            extend: {
              colors: extendedColors,
              boxShadow: extendedBoxShadows
            }
          }
        }
      }
    )
  ]
}
