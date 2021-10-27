const { src, dest, watch, series } = require('gulp')
const cp = require('child_process')

const eleventyLocal = () => {
  return cp.spawn("npx", ["eleventy", '--serve', '--quiet'], { stdio: "inherit" })
}

exports.default = function(callback) {
  eleventyLocal()
  callback()
}