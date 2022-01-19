require('dotenv').config()
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItDiv = require('markdown-it-div')
const markdownItAbbr = require('markdown-it-abbr')
const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function (eleventyConfig) {

//** markdown
  let mdOptions = {
    typographer: true,
    quotes: '“”‘’',
    html: true
  }
  let md =  markdownIt(mdOptions)
            .use(markdownItAttrs)
            .use(markdownItDiv)
            .use(markdownItAbbr)

  //11ty md eleventyConfig
  eleventyConfig.setLibrary("md", md)

  // Browser Sync (Thanks @paulrobertlloyd: https://github.com/paulrobertlloyd/paulrobertlloyd-v4/blob/7d95b8258ab9cc750b69be442abea8b7310b2306/.eleventy.js#L5)
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\?page=(\d+)/g,
      replace: 'page/$1.html',
    }],
  })

//** collections

  //all from content/articles, ordered by date
  eleventyConfig.addCollection('articles', require('./lib/collections/articles.js'))

  //all from content/diary ordered by date
  eleventyConfig.addCollection('diary', require('./lib/collections/diary.js'))

  //all from content/notes ordered by date
  eleventyConfig.addCollection('notes', require('./lib/collections/notes.js'))

  //ALL from content/**, ordered by date
  eleventyConfig.addCollection('content', require('./lib/collections/content.js'))

  // //returns an array of years from content/**
  // eleventyConfig.addCollection('years', require('./lib/collections/years.js'))
  // eleventyConfig.addCollection('yearsArticles', require('./lib/collections/yearsArticles.js'))
  // eleventyConfig.addCollection('yearsDiary', require('./lib/collections/yearsDiary.js'))

  //An an array of 365 days with any posts for that day.
  eleventyConfig.addCollection('archives', require('./lib/collections/archives.js'))

  //returns an array of tags used in post in content/**
  eleventyConfig.addCollection('tags', require('./lib/collections/tags.js'))

  //returns a dictionary of stats about the all posts
  eleventyConfig.addCollection('stats', require('./lib/collections/stats.js'))


//** shortcodes
  eleventyConfig.addShortcode('img', require('./lib/shortcodes/img.js'))
  eleventyConfig.addShortcode('figure', require('./lib/shortcodes/figure.js'))

//** filters
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter('dateSince', require('./lib/filters/date-since.js'))
  eleventyConfig.addFilter('slug_date', require('./lib/filters/slug-date.js')) //this is only used in redirects
  eleventyConfig.addFilter('shuffle', require('./lib/filters/shuffle.js'))
  eleventyConfig.addFilter('subset', require('./lib/filters/subset.js'))
  eleventyConfig.addFilter("plural", require('./lib/filters/plural.js'))
  eleventyConfig.addFilter("slugify", require('./lib/filters/slugify.js'))
  eleventyConfig.addFilter("hangingPunctuation", require('./lib/filters/hanging-punctuation.js'))
  eleventyConfig.addFilter("firstSentence", require('./lib/filters/first-sentence.js'))
  eleventyConfig.addFilter("smartypants", require('./lib/filters/smartypants.js'))
  eleventyConfig.addFilter("removeExtension", require('./lib/filters/remove-extension.js'))
  eleventyConfig.addFilter("formatNumber", require('./lib/filters/format-number.js'))

//** static files
  eleventyConfig.addPassthroughCopy({ "source/content/admin/*.yml": "admin/" })
  eleventyConfig.addPassthroughCopy('source/_redirects')
  eleventyConfig.addPassthroughCopy("source/images")
  eleventyConfig.addPassthroughCopy("source/assets")

//** watch lib
  eleventyConfig.addWatchTarget("./lib/**/*.js")
  eleventyConfig.addWatchTarget("./lib/**/*.njk")

//** plugins
  eleventyConfig.addPlugin(pluginRss)

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