const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const postcssJs = require('postcss-js')

module.exports = (component) => {
  const rootDir = path.join(__dirname, '..')
  const componentPath = path.join(rootDir, 'src', component)

  const componentFile = fs.readFileSync(componentPath)
  const componentContent = componentFile.toString()

  return postcss([
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
  ])
    .process(componentContent, { from: componentPath })
    .then((result) => {
      const root = result.root
      return postcssJs.objectify(root)
    })
    .catch((err) => {
      throw err
    })
}
