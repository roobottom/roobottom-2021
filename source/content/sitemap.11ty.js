class SiteMap {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: function (data) {
        return data.global.sitemap;
      },
    };
  }

  render({ collections: { all: content }, global: { base_url } }) {
    const urls = content.map((c) => `${base_url}${c.url}`)
    urls.sort()
    return urls.join("\n")
  }
}

module.exports = SiteMap