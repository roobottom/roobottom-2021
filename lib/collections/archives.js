const moment = require('moment')

module.exports = collectionApi => {
  
  let archives = {}

  const posts = collectionApi.getFilteredByGlob("./source/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (let post of posts) {
    let postMonth = moment(post.date).format('MMMM')
    let postDay = moment(post.date).format('D')
    let postDayOfYear = moment(post.date).format('DDD')

    if (!archives[postMonth]) {
      archives[postMonth] = {}
    }

    if (!archives[postMonth][postDay]) {
      archives[postMonth][postDay] = {
        posts: [post],
        id: postDayOfYear
      }

    }
    else {
      archives[postMonth][postDay].posts.push(post)
    }

  }

  return archives

}