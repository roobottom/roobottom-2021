const slugDate = require('../../../lib/filters/slug-date.js')
const date = require('../../../lib/filters/date.js')
const openGraph = require('../../data/openGraph.js')

module.exports = {
  layout: 'page.njk',
  page: {
    collectionId: 'photos',
    collectionTitle: 'Diary post',
    navigationId: 'diary',
    postType: 'photos'
  },
  eleventyComputed: {
    title: data => { 
      return `Noted on ${date(data.date, 'D MMMM YYYY', true)}`
    },
    permalink: data => `/diary/${slugDate(data.date)}-${data.page.fileSlug}/`,
    openGraph: data => {
      return {
        type: 'article',
        description: data.title,
        image: data.photo[0].url === undefined ? openGraph.image : openGraph.imageUrlStub + data.photo[0].url,
        imageAlt: data.photo[0].alt === undefined ? `A cover image for the post: ${data.title}` : data.photo[0].alt
      }
    }
  }
}