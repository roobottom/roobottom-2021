const slugDate = require('../../../lib/filters/slug-date.js')
const date = require('../../../lib/filters/date.js')
const smartypants = require('smartypants')

module.exports = {
  layout: 'page.njk',
  page: {
    collectionId: 'diary',
    collectionTitle: 'Diary post',
    navigationId: 'diary',
    postType: 'notes'
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
        image: `https://ik.imagekit.io/roobottom/tr:ot-${encodeURIComponent(data.title.substring(0, 26))},otc-FFFFFF,otw-1280,ots-180,otf-Bely.ttf/og-backgrond.png`,
        imageAlt: data.title
      }
    }
  }
}