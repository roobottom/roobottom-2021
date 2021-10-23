const { src, dest, watch, series } = require('gulp')
const cp = require('child_process')

const eleventyLocal = () => {
  return cp.spawn("npx", ["eleventy", '--serve'], { stdio: "inherit" })
}

exports.default = function(callback) {
  eleventyLocal()
  callback()
}