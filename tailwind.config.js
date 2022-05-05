const fontSizeCalculator = require('./utils/fontsize-calculator')
const spacingCalculator = require('./utils/spacing-calculator')
const extendedColors = require('./extend/colors')
const extendedBoxShadows = require('./extend/box-shadows')
const rem = require('./utils/rem-calculator')

const DEFAULT_OPTIONS = {
  baseFontSize: '14px',
  typeScale: 1.200
}

module.exports = {
  content: [
    { raw: '' }
  ],
  theme: {
    spacing: spacingCalculator(DEFAULT_OPTIONS.baseFontSize),
    fontSize: fontSizeCalculator(DEFAULT_OPTIONS.baseFontSize, DEFAULT_OPTIONS.typeScale),
    extend: {
      colors: extendedColors,
      boxShadow: extendedBoxShadows,
      spacing: {
        4.5: `${rem(DEFAULT_OPTIONS.baseFontSize, 18, 8)}rem`
      }
    }
  },
  plugins: []
}
