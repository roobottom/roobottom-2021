const moment = require('moment')

module.exports = collectionApi => {
  const photos = collectionApi.getFilteredByGlob("./source/content/photos/*.md").sort((a, b) => {
    return b.date - a.date
  })
  const articles = collectionApi.getFilteredByGlob("./source/content/articles/*.md").sort((a, b) => {
    return b.date - a.date
  })
  const allPosts = collectionApi.getFilteredByGlob("./source/content/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  let numberOfArticles = Object.keys(articles).length
  let numberOfDiaryPosts = Object.keys(photos).length
  let numberOfAllPosts = Object.keys(allPosts).length


  return {
    articles: {
      count: numberOfArticles,
      latest: articles[0].date,
      earliest: articles[numberOfArticles-1].date
    },
    diaryPosts: {
      count: numberOfDiaryPosts,
      latest: photos[0].date,
      earliest: photos[numberOfDiaryPosts-1].date
    },
    allPosts: {
      count: numberOfAllPosts,
      latest: allPosts[0].date,
      earliest: allPosts[numberOfAllPosts-1].date,
      timespan: moment(allPosts[0].date).diff(allPosts[numberOfAllPosts-1].date, 'years')
    }
  }
}
