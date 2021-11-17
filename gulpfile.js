const { src, dest, watch, series } = require('gulp')
const less = require('gulp-less')
const cp = require('child_process')
const babel = require('gulp-babel')

const css = () => {
  return src('./source/less/styles.less')
    .pipe(less())
    .pipe(dest('./_site'))
}

const eleventyLocal = (callback) => {
  return cp.spawn("npx", ["eleventy", '--serve', '--quiet'], { stdio: "inherit" })
  callback()
}
const eleventyLive = (callback) => {
  cp.spawn("npx", ["eleventy"], { stdio: "inherit" })
  callback()
}

const js = (callback) => {
  return src('./source/javascript/app.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest('./_site'))
}

exports.default = function(callback) {
  eleventyLocal()
  watch(['./source/less/**/*.less', './source/javascript/**/*.js'], 
    { ignoreInitial: false }, 
    series(css, js))
  callback()
}
exports.build = series(eleventyLive, css, js)