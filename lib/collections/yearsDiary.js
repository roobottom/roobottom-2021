const moment = require('moment')
const _ = require('lodash')

module.exports = collectionApi => {
  let years = []

  const posts = collectionApi.getFilteredByGlob("./source/content/photos/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (let post of posts) {
    years.push(moment(post.date).format('YYYY'))
  }
  
  return _.uniq(years)
}