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
    let gps = exif.GPSLatitude && exif.GPSLongitude ? {
      latitude: exif.GPSLatitude,
      longitude: exif.GPSLongitude,
    } : null

    enrichedImages.push({
      file: image,
      relative: image.replace(base, ''),
      relativeDir: path.parse(image).dir.replace(base, ''),
      ...path.parse(image),
      exif: {
        gps: gps,
        settings: {
          iso: exif.ISO,
          speed: exif.ShutterSpeedValue,
          aperture: exif.ApertureValue,
          flash: exif.Flash,
        },
        camera: {
          model: exif.Model,
          lens: exif.LensModel
        },
        file: {
          date: exif.CreateDate
        }
      }
    })
  }

  return enrichedImages

}

module.exports = function () {
  return getImages()
}