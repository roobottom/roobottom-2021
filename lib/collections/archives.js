/*
returns: 
{
  calendar: {
    January: {
      posts: [arr],
      dayOfYear: int
    }
  },
  days: [arr] //all days of year that have posts
}
*/
const moment = require('moment')
const onlyUnique = function(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = collectionApi => {
  
  let archives = {
    calendar: {},
    days: []
  }

  const posts = collectionApi.getFilteredByGlob("./source/**/*.md").sort((a, b) => {
    return b.date - a.date
  })

  for (let post of posts) {
    let postMonth = moment(post.date).format('MMMM')
    let postDay = moment(post.date).format('D')
    let postDayOfYear = moment(post.date).format('DDD')

    if (!archives.calendar[postMonth]) {
      archives.calendar[postMonth] = {}
    }

    if (!archives.calendar[postMonth][postDay]) {
      archives.calendar[postMonth][postDay] = {
        posts: [post],
        dayOfYear: postDayOfYear
      }

    }
    else {
      archives.calendar[postMonth][postDay].posts.push(post)
    }

    archives.days.push(postDayOfYear)

  }
  archives.days = archives.days.filter(onlyUnique)
  console.log(archives)
  return archives

}