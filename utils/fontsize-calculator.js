module.exports = (baseFontSize, typeScale) => {
  const DEFAULT_SCALES = {
    '7xl': 8,
    '6xl': 7,
    '5xl': 6,
    '4xl': 5,
    '3xl': 4,
    '2xl': 3,
    xl: 2,
    lg: 1,
    base: 0,
    tiny: -1,
    sm: -2,
    xs: -3
  }

  return Object.keys(DEFAULT_SCALES).reduce((acc, size) => {
    const exponent = DEFAULT_SCALES[size]
    const multiplier = parseFloat(Math.pow(typeScale, exponent)).toPrecision(4)
    return { ...acc, ...{ [size]: `${multiplier}rem` } }
  }, {})
}
