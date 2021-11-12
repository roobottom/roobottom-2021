exports.data = function () {
  return {
    permalink: "_generated-random-photos.json",
    permalinkBypassOutputDir: true,
    layout: false,
  }
}

const shuffle = function (array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
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

  photos = shuffle(photos)

  return JSON.stringify({
    randomPhotos: photos
  }, null, 2)

}