require('dotenv').config()
const glob = require("glob")
const path = require("path")
const exiftool = require("exiftool-vendored").exiftool
const base = 'source/'

async function getExif (file) {
  return exiftool
    .read(file)
    .then((tags) => {
      return tags
    })
}

async function getImages () {

  const images = glob.sync(`${base}**/*.{jpg,jpeg}`)
  let enrichedImages = []
  
  for (image of images) {
    /* getting exif data is very costly, only do that in production */
    //let exif = process.env.NODE_ENV === 'dev' ? {} : await getExif(image)
    let exif = await getExif(image)

    enrichedImages.push({
      file: image,
      relative: image.replace(base, ''),
      ...path.parse(image),
      exif: exif
    })
  }

  return enrichedImages

}

module.exports = function () {
  return getImages()
}