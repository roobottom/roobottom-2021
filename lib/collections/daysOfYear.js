/*
returns: 
{
  32: {
    posts: [arr],
    day: 1,
    month: February
  },
  33: {
    ...etc
  }
}
*/
const moment = require('moment')

module.exports = collectionApi => {
  
  let daysOfYear = {}

  const posts = collectionApi.getFilteredByGlob("./source/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (let post of posts) {
    let postMonth = moment(post.date).format('MMMM')
    let postDay = moment(post.date).format('D')
    let postYear = moment(post.date).format('YYYY')
    let postDayOfYear = moment(post.date).format('DDD')
    
    if (moment(post.date).isLeapYear() && moment(post.date).isAfter(`${postYear}-02-28`)) {
      postDayOfYear = postDayOfYear - 1
    }

    // build daysOfYear object
    if (!daysOfYear[postDayOfYear]) {
      daysOfYear[postDayOfYear] = {
        posts: [post],
        day: postDay,
        month: postMonth
      }
    }
    else {
      daysOfYear[postDayOfYear].posts.push(post)
    }

  }
  return daysOfYear
}