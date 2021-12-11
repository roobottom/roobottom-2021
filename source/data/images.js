require('dotenv').config()
const glob = require("glob")
const path = require("path")
const exiftool = require("exiftool-vendored").exiftool
const moment = require("moment")
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
    let exif = await getExif(image)

    enrichedImages.push({
      file: image,
      relative: image.replace(base, ''),
      relativeDir: path.parse(image).dir.replace(base, ''),
      ...path.parse(image),
      exif: {
        location: exif.GPSLatitude && exif.GPSLongitude ? {
          latitude: exif.GPSLatitude,
          longitude: exif.GPSLongitude
        } : null,
        iso: exif.ISO ? exif.ISO : null,
        speed: exif.ShutterSpeedValue ? exif.ShutterSpeedValue : null,
        aperture: exif.ApertureValue ? exif.ApertureValue : null,
        flash: exif.Flash ? exif.Flash : null,
        camera: exif.Model ? exif.Model : null,
        lens: exif.LensModel ? exif.LensModel : null,
        date: exif.CreateDate ? moment(exif.CreateDate, 'YYYY-MM-DDHH:mm').format('D MMMM YYYY, h:mma') : null
      }
    })
  }

  return enrichedImages

}

module.exports = function () {
  return process.env.NODE_ENV === 'dev' ? [] : getImages()
}