const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy")

module.exports = function (eleventyConfig) {

  //collections
  eleventyConfig.addCollection('articles', require('./lib/collections/articles.js'))
  eleventyConfig.addCollection('archives', require('./lib/collections/archives.js'))

  //shortcodes
  eleventyConfig.addShortcode('figure', require('./lib/shortcodes/figure.js'))

  //filters
  eleventyConfig.addFilter('date', require('./lib/filters/date.js'))
  eleventyConfig.addFilter('slug_date', require('./lib/filters/slug-date.js'))

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