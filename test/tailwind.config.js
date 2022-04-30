const plugin = require('tailwindcss/plugin')

const fontSizeCalculator = require('../utils/fontsize-calculator')
const spacingCalculator = require('../utils/spacing-calculator')
const extendedColors = require('../src/extended/colors')
const extendedBoxShadows = require('../src/extended/box-shadows')

const base = require('../dist/base/combined')
const components = require('../dist/components/combined')

const DEFAULT_OPTIONS = {
  baseFontSize: '14px',
  typeScale: 1.200
}

module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin.withOptions((options = DEFAULT_OPTIONS) => {
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
  ]
}
