const plugin = require('tailwindcss/plugin')

const fontSizeCalculator = require('./utils/fontsize-calculator')
const spacingCalculator = require('./utils/spacing-calculator')
const extendedColors = require('./extend/colors')
const extendedBoxShadows = require('./extend/box-shadows')

const base = require('./dist/base/combined')
const components = require('./dist/components/combined')

const DEFAULT_OPTIONS = {
  baseFontSize: '14px',
  typeScale: 1.200
}

const dotui = plugin.withOptions((options = DEFAULT_OPTIONS) => {
  return ({ addBase, addComponents }) => {
    addBase({
      html: { fontSize: `${parseInt(options.baseFontSize, 10) * 100 / 16}%` }
    })
    addBase(base)
    addComponents(components)
  }
}, (options = DEFAULT_OPTIONS) => {
  return {
    theme: {
      spacing: spacingCalculator(options.baseFontSize),
      fontSize: fontSizeCalculator(options.baseFontSize, options.typeScale),
      extend: {
        colors: extendedColors,
        boxShadow: extendedBoxShadows
      }
    }
  }
})

module.exports = dotui
