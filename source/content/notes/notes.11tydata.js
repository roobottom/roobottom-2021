const slugDate = require('../../../lib/filters/slug-date.js')
const date = require('../../../lib/filters/date.js')

module.exports = {
  layout: 'page.njk',
  page: {
    collectionId: 'notes',
    collectionTitle: 'Note',
    navigationId: 'notes'
  },
  eleventyComputed: {
    title: data => { 
      return `Noted on ${date(data.date)}`
    },
    permalink: null,//data => `/notes/${slugDate(data.date)}-${data.page.fileSlug}/`,
    openGraph: data => {
      return {
        type: 'article',
        image: `https://ik.imagekit.io/roobottom/tr:ot-${encodeURIComponent(data.title.substring(0, 26))},otc-FFFFFF,otw-1280,ots-180,otf-Bely.ttf/og-backgrond.png`,
        imageAlt: data.title
      }
    }
  }
}