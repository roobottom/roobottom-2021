class Feed {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "/notes/feed.json",
    }
  }

  render({ collections: { notes }, global: global }) {
    const items = notes.slice(0, 50)
    const feed = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Jon Roobottom’s notes',
      description: 'Tweet-like updates published via Indiekit',
      home_page_url: 'https://roobottom.com/notes/',
      feed_url: 'https://roobottom.com/notes/feed.json',
      icon: 'https://roobottom.com/assets/appicon.png',
      language: 'en-GB',
      authors: [{
        name: 'Jon Roobottom',
        url: 'https://roobottom.com/',
        avatar: 'https://roobottom.com/assets/appicon.png',
      }],
      items: []
    }

    for (let item of items) {

      let content = item.templateContent

      if (item.data.links) {
        for (let link of item.data.links) {
          content = content + `<p><a href="${link}">${link}</a></p>`
        }
      }

      if (item.data.photo) {
        for (let photo of item.data.photo) {
          content = content + `<figure><img src="${photo.url}"></figure>`
        }
      }

      const cover = item.data.photo ? { image: item.data.photo[0].url } : null

      feed.items.push({
        id: item.url,
        url: item.url,
        content_html: content,
        date_published: item.date,
        ...cover
      })
    }

    return JSON.stringify(feed, null, 2)
  }
}

module.exports = Feed
