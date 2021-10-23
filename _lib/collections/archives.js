const moment = require('moment')

module.exports = collectionApi => {
  const archives = collectionApi.getFilteredByGlob("./_source/**/*.md").sort((a, b) => {
    return b.date - a.date
  })
  
  const years = []
  let prevYear = null

  for(const post of archives) {
    
    let postYear = moment(post.date).format('YYYY')
    if(postYear !== prevYear) {
      prevYear = postYear
      years.push(postYear)
    }

  }

  archives.years = years

  return archives
}