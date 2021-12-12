require('dotenv').config()
const glob = require("glob")
const path = require("path")
const base = 'source/'

async function getImages () {

  const images = glob.sync(`${base}**/*.{jpg,jpeg}`)
  let enrichedImages = []
  
  for (image of images) {

    enrichedImages.push({
      file: image,
      relative: image.replace(base, ''),
      relativeDir: path.parse(image).dir.replace(base, ''),
      ...path.parse(image)
    })
  }

  return enrichedImages

}

module.exports = async function () {
  return await getImages()
}