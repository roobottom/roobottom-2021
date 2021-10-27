const moment = require('moment')

module.exports = collectionApi => {
  const years = {}
  const archives = collectionApi.getFilteredByGlob("./source/content/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (const post of archives) {
    const year = moment(post.date).format('YYYY')
    const yearPosts = years[year] || []
    yearPosts.push(post)
    years[year] = yearPosts
  }
  years.list = Object.keys(years)
  return years
}