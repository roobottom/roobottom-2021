const moment = require('moment')
const _ = require('lodash')

module.exports = collectionApi => {
  const years = {
    diaryPosts: [],
    articles: [],
    allPosts: []
  }
  const photos = collectionApi.getFilteredByGlob("./source/content/photos/*.md").sort((a, b) => {
    return b.date - a.date
  })
  const articles = collectionApi.getFilteredByGlob("./source/content/articles/*.md").sort((a, b) => {
    return b.date - a.date
  })
  const allPosts = collectionApi.getFilteredByGlob("./source/content/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (let post of photos) {
    years.diaryPosts.push(moment(post.date).format('YYYY'))
  }

  for (let post of articles) {
    years.articles.push(moment(post.date).format('YYYY'))
  }

  for (let post of allPosts) {
    years.allPosts.push(moment(post.date).format('YYYY'))
  }
  
  return {
    diaryPosts: _.uniq(years.diaryPosts),
    articles: _.uniq(years.articles),
    allPosts: _.uniq(years.allPosts)
  }
}