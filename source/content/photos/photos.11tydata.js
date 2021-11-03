const moment = require('moment')

module.exports = {
  eleventyComputed: {
    title: data => { 
      if (data.summary) {
        return data.summary
      } else {
        return moment(data.date).format('D MMMM YYYY')
      }
     }
  }
}