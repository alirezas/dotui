const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = ({ baseFontSize, typeScale, fontSizeUnit }) => {
  const defaultFontSizes = defaultConfig.theme.fontSize
  const indexOfBase = Object.keys(defaultFontSizes).findIndex((el) => el === 'base')

  return Object.keys(defaultFontSizes).reduce((acc, size, index) => {
    const exponent = index - indexOfBase
    const multiplier = parseFloat(
      (fontSizeUnit === 'px' ? baseFontSize : 1) * Math.pow(typeScale, exponent)
    ).toPrecision(4)
    return { ...acc, ...{ [size]: `${multiplier}${fontSizeUnit}` } }
  }, {})
}
