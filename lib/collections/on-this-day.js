const moment = require('moment')
const today = moment().format('DD-MM')

module.exports = collectionApi => {
  const posts = collectionApi.getFilteredByGlob("./source/content/**/*.md").sort((a, b) => {
    return b.date - a.date
  })
  .filter(post => {
    return moment(post.date).format('DD-MM') === today
  })

  return posts
}