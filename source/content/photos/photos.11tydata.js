const _ = require('lodash')

module.exports = {
  eleventyComputed: {
    title: data => { return data.summary }
  }
}