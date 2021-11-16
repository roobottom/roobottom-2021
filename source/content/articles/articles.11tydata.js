const slugDate = require('../../../lib/filters/slug-date.js')
const slugify = require('../../../lib/filters/slugify.js')
const openGraph = require('../../data/openGraph.js')

module.exports = {
  layout: 'page.njk',
  type: 'Long form article',
  eleventyComputed: {
    permalink: data => `/articles/${slugDate(data.date)}-${slugify(data.title)}/`,
    openGraph: data => {
      return {
        type: 'article',
        description: data.summary === undefined ? 'Another long-form article from the keyboard of Jon Roobottom' : data.summary,
        image: data.cover === undefined ? openGraph.image : openGraph.imageUrlStub + data.cover,
        imageAlt: data.coverAlt === undefined ? `The image for the article titled ${data.title}` : data.coverAlt
      }
    }
  }
}