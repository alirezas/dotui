const defaultConfig = require('tailwindcss/defaultConfig')
const rem = require('./rem-calculator')
const defaultSpaces = defaultConfig.theme.spacing
defaultSpaces['4.5'] = '18px'

module.exports = ({ baseFontSize, spacingUnit }) => {
  return Object.keys(defaultSpaces).reduce((acc, size) => {
    const inPX = isNaN(size) ? size : size * 4

    let space = inPX
    if (inPX === 0) {
      space = '0px'
    } else if (inPX === 'px') {
      space = '1px'
    } else {
      space = spacingUnit === 'px' ? `${space}px` : `${rem(baseFontSize, inPX, 8)}rem`
    }

    return { ...acc, ...{ [size]: `${space}` } }
  }, {})
}
