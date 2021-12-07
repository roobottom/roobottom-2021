const glob = require("glob")
const path = require("path")
const base = 'source/'

async function getImages () {
  let thefiles = []
  glob(`${base}**/*.{jpg,jpeg}`, function (er, files) {
    for (file of files) {
      thefiles.push({
        file: file,
        ...path.parse(file),
        relative: file.replace(base, '')
      })
    }
  })
  return thefiles
}

module.exports = async function () {
  return getImages()
}