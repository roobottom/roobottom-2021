const moment = require('moment')

class RSS {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      permalink: "feed.xml",
    }
  }

  render({ collections: { diary }, global: global }) {

    const items = diary.slice(0, 25)
    let renderPosts = []

    const postImages = (images) => {
      let imageArray = []
      for(let image of images) {
        imageArray.push(`<figure><img src="${global.base_url}${image.url}" alt="${image.alt}"/></figure>`)
      }
      return imageArray.join('')
    }
    
    for (let item of items) {
      renderPosts.push(
        `<entry>
          <id>${global.base_url}${item.url}</id>
          <title>${item.data.title}</title>
          <updated>${moment(item.date).format()}</updated>
          <link rel="alternate" href="${global.base_url}${item.url}" type="text/html"/>
          <content type="html"><![CDATA[${item.templateContent.replaceAll(/\r/g,'')}${postImages(item.data.photo)}]]></content>
        </entry>`)
    }

return `<?xml version="1.0"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>${global.site_title} - Diary posts</title>
    <subtitle>${global.site_description}</subtitle>
    <link href="${global.base_url}/feed.xml" rel="self" type="application/atom+xml"/>
    <link href="${global.base_url}/"/>
    <updated>${moment(items[0].date).format()}</updated>
    <id>${global.base_url}/</id>
    <author>
      <name>${global.author}</name>
      <uri>${global.base_url}/</uri>
    </author>
    <rights>© ${moment().format('YYYY')} ${global.author}</rights>
    <icon>${global.base_url}/assets/appicon.png</icon>
    ${renderPosts.join('')}
</feed>`
  }
}

module.exports = RSS
