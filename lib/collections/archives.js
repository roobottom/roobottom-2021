const moment = require('moment')

module.exports = collectionApi => {
  
  let archives = {}

  const posts = collectionApi.getFilteredByGlob("./source/**/*.md")

  for(let post of posts) {
    let postDayRaw = moment(post.date).format('DDD')
    let postDay = moment(post.date).isLeapYear() && postDayRaw > 1 ? postDayRaw - 1 : postDayRaw
    if(archives[postDay]) {
      archives[postDay].posts.push(post)
    }
    else {
      archives[postDay] = {
        posts: [post],
        day: moment(post.date).format('D'),
        month: moment(post.date).format('M')
      }
    }
  }

  console.log(archives)
  return archives

}