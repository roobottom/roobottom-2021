const moment = require('moment')
const slugify = require('../../../lib/filters/slugify.js')
const openGraph = require('../../data/openGraph.js')

module.exports = {
  layout: "page.njk",
  eleventyComputed: {
    permalink: data => `/articles/${moment(data.date).format('YYYY-MM-DD')}-${slugify(data.title)}/`,
    openGraph: data => {
      return {
        type: 'article',
        description: data.summary === undefined ? 'Another long-form article from the keyboard of Jon Roobottom' : data.summary,
        image: data.cover === undefined ? openGraph.image : `https://ik.imagekit.io/roobottom/tr:w-1280,h-640,fo-auto/${data.cover}`,
        imageAlt: data.coverAlt === undefined ? `The image for the article titled ${data.title}` : data.coverAlt
      }
    }
  }
}