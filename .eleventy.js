module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode("figure", require('./_lib/tags/figure.js'))

  return {
    dir: {
      input: "_source",
      includes: "_includes",
      layouts: "_layouts",
      dataTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      templateFormats: ["html", "njk"]
    }
  }
}