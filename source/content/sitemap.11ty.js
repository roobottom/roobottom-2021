const slugify = require('../../lib/filters/slugify.js')

class SiteMap {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: function (data) {
        return data.global.sitemap
      },
    };
  }

  render({ collections: { content, years, tags }, global: { base_url } }) {
    const navigation = require('../data/globalNavigation.js').map(item => `${base_url}${item.href}`)
    const posts = content.map(post => `${base_url}${post.url}`)
    const archive = years.map(year => `${base_url}/archives/${year}/`)
    const tagsList = tags.map(tag => `${base_url}/tags/${slugify(tag.title)}/`)
    const urls = [...navigation, ...posts, ...archive, ...tagsList]
    urls.sort()
    return urls.join("\n")
  }
}

module.exports = SiteMap