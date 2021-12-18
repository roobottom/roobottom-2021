const slugDate = require('../../../lib/filters/slug-date.js')
const date = require('../../../lib/filters/date.js')
const openGraph = require('../../data/openGraph.js')
const smartypants = require('smartypants')

module.exports = {
  layout: 'page.njk',
  page: {
    collectionId: 'diary',
    collectionTitle: 'Diary post',
    navigationId: 'diary',
    postType: 'photos'
  },
  eleventyComputed: {
    title: data => { 
      return data.summary === undefined || data.summary === '' ? `Diary entry for ${date(data.date)}` : smartypants.smartypants(data.summary, 1)
    },
    permalink: data => `/diary/${slugDate(data.date)}-${data.page.fileSlug}/`,
    openGraph: data => {
      return {
        type: 'article',
        description: data.summary === undefined ? 'Another diary post from the keyboard of Jon Roobottom' : data.summary,
        image: data.photo[0].url === undefined ? openGraph.image : openGraph.imageUrlStub + data.photo[0].url,
        imageAlt: data.photo[0].alt === undefined ? `The image for the diary post titled ${data.title}` : data.photo[0].alt
      }
    }
  }
}