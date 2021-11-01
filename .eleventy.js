const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy")
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

//** shortcodes
  eleventyConfig.addShortcode('figure', require('./lib/shortcodes/figure.js'))

//** filters
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter('slug_date', require('./lib/filters/slug-date.js'))

//** static files
  eleventyConfig.addPassthroughCopy({ "source/content/admin/*.yml": "admin/" })
  eleventyConfig.addPassthroughCopy('source/_redirects')

//**  11ty core settings 
  return {
    dir: {
      input: 'source',
      includes: 'includes',
      layouts: 'layouts',
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      templateFormats: ['njk']
    }
  }
}