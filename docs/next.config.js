/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa'
  }
})
