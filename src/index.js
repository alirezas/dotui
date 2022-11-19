const plugin = require('tailwindcss/plugin')

const DEFAULT_OPTIONS = require('./config/default-options')
const fontSizeCalculator = require('./utils/fontsize-calculator')
const spacingCalculator = require('./utils/spacing-calculator')
const extendedColors = require('./extend/colors')
const extendedBoxShadows = require('./extend/box-shadows')

const badge = require('../dist/components/badge')

const dotui = plugin.withOptions(
  (options) => {
    const settings = { ...DEFAULT_OPTIONS, ...options }
    return ({ addBase, addComponents }) => {
      addBase({
        html: { fontSize: `${(settings.baseFontSize * 100) / 16}%` }
      })

      addComponents(badge)
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
