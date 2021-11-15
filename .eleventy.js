require('dotenv').config()

module.exports = function (eleventyConfig) {

//** collections

  //all from content/articles, ordered by date
  eleventyConfig.addCollection('articles', require('./lib/collections/articles.js'))

  //all from content/photos and content/notes, ordered by date
  eleventyConfig.addCollection('diary', require('./lib/collections/diary.js'))

  //all from content/**, ordered by date
  eleventyConfig.addCollection('content', require('./lib/collections/content.js'))

  //returns an array of years from content/**
  eleventyConfig.addCollection('years', require('./lib/collections/years.js'))

  //returns an array of tags used in post in content/**
  eleventyConfig.addCollection('tags', require('./lib/collections/tags.js'))

  //returns a dictionary of stats about the all posts
  eleventyConfig.addCollection('stats', require('./lib/collections/stats.js'))


//** shortcodes
  eleventyConfig.addShortcode('img', require('./lib/shortcodes/img.js'))
  eleventyConfig.addShortcode('figure', require('./lib/shortcodes/figure.js'))

//** filters
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter('slug_date', require('./lib/filters/slug-date.js'))
  eleventyConfig.addFilter('shuffle', require('./lib/filters/shuffle.js'))
  eleventyConfig.addFilter('subset', require('./lib/filters/subset.js'))

//** static files
  eleventyConfig.addPassthroughCopy({ "source/content/admin/*.yml": "admin/" })
  eleventyConfig.addPassthroughCopy('source/_redirects')
  eleventyConfig.addPassthroughCopy("source/images")

//** watch lib
  eleventyConfig.addWatchTarget("./lib/**/*.js")

//**  11ty core settings 
  return {
    dir: {
      input: 'source',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      templateFormats: ['njk']
    }
  }
}