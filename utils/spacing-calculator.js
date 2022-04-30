const defaultConfig = require('tailwindcss/defaultConfig')
const rem = require('./rem-calculator')
const defaultSpaces = defaultConfig.theme.spacing

module.exports = (baseFontSize) => {
  return Object.keys(defaultSpaces).reduce((acc, size) => {
    const inPX = isNaN(size) ? size : size * 4

    let inRem = 0
    if (inPX === 0) {
      inRem = '0px'
    } else if (inPX === 'px') {
      inRem = '1px'
    } else {
      inRem = `${rem(baseFontSize, inPX, 8)}rem`
    }

    return { ...acc, ...{ [size]: `${inRem}` } }
  }, {})
}
