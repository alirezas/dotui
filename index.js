const plugin = require('tailwindcss/plugin')

const fontSizeCalculator = require('./utils/fontsize-calculator')
const spacingCalculator = require('./utils/spacing-calculator')
const extendedColors = require('./extend/colors')
const extendedBoxShadows = require('./extend/box-shadows')

// const base = require('./dist/base/combined')
// const components = require('./dist/components/combined')

const DEFAULT_OPTIONS = {
  baseFontSize: 14,
  typeScale: 1.2,
  fontSizeUnit: 'px',
  spacingUnit: 'px'
}

const dotui = plugin.withOptions(
  (options) => {
    const settings = { ...DEFAULT_OPTIONS, ...options }
    return ({ addBase }) => {
      addBase({
        html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` }
      })
      // addBase(base)
      // addComponents(components)
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

module.exports = dotui
