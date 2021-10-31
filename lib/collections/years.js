const moment = require('moment')
const _ = require('lodash')

module.exports = collectionApi => {
  const years = []
  const archives = collectionApi.getFilteredByGlob("./source/content/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (const post of archives) {
    years.push(moment(post.date).format('YYYY'))
  }
  

  console.log(_.uniq(years))
  return _.uniq(years)
}