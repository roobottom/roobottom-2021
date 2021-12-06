const glob = require("glob")
const path = require("path")
const base = 'source/images/'

async function getImages () {
  let thefiles = []
  glob(`${base}**/*.{jpg,jpeg}`, function (er, files) {
    for (file of files) {
      thefiles.push({
        file: file,
        ...path.parse(file)
      })
    }
  })
  return thefiles
}


module.exports = async function () {
  return getImages()
}