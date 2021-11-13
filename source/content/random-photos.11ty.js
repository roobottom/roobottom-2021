exports.data = function () {
  return {
    permalink: "_generated-random-photos.json",
    permalinkBypassOutputDir: true,
    layout: false,
  }
}

exports.render = function (data) {
  let photos = []
  for (let entry of data.collections.diary) {
    let obj = {
      url: entry.data.photo[0].url,
      alt: entry.data.photo[0].alt || entry.data.summary
    }
    photos.push(obj)
  }

  return JSON.stringify({
    randomPhotos: photos
  }, null, 2)

}