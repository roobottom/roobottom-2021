module.exports = function (eleventyConfig) {

  //collections
  eleventyConfig.addCollection('articles', require('./_lib/collections/articles.js'))
  eleventyConfig.addCollection('archives', require('./_lib/collections/archives.js'))

  //shortcodes
  eleventyConfig.addShortcode('figure', require('./_lib/shortcodes/figure.js'))

  //filters
  eleventyConfig.addFilter('date', require('./_lib/filters/date.js'))
  eleventyConfig.addFilter('slug_date', require('./_lib/filters/slug-date.js'))

  return {
    dir: {
      input: '_source',
      includes: '_includes',
      layouts: '_layouts',
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      templateFormats: ['njk']
    }
  }
}