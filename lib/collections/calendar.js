/*
returns: 
{
  February: {
    1: {
      posts: [arr],
      dayOfYear: 32
    }
  },
  March {
    ...etc
  }
}
*/
const moment = require('moment')

module.exports = collectionApi => {
  
  let calendar = {}

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

    // build calendar object
    if (!calendar[postMonth]) {
      calendar[postMonth] = {}
    }
    if (!calendar[postMonth][postDay]) {
      calendar[postMonth][postDay] = {
        posts: [post],
        dayOfYear: postDayOfYear
      }
    }
    else {
      calendar[postMonth][postDay].posts.push(post)
    }

  }
  return calendar
}