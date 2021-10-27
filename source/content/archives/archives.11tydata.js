const moment = require('moment')

// module.exports = function () {

//   function * range(start, end) { 
//     for (let i = start; i <= end; i++) {
//       yield i;
//     }
//   }

//   function generate_years(from) {
//     const to = moment().format('YYYY')
//     return [...range(from, to)].map(year => String(year))
//   }

//   const years = generate_years('2000')
//   const years_object = years.map(year => ({
//     date: moment(year).format('YYYY-MM-DD'),
//     slug: year
//   }))

  
// }



module.exports = {
  eleventyComputed: {
    posts: function () {
      console.log(data)
    }
  }
}