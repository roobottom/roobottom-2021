const img = require('./img.js')
const attrs = require('./attrs.js')

module.exports = function(url, caption, classnames, link = true, linkSuffix = '-preview.html') {
  return `
<figure ${attrs({'class':classnames})}>
  ${link ? '<a href="' + url + linkSuffix + '">' : ''}
  ${img(url,{},classnames)}
  ${url ? '</a>' : ''}
  ${figcaption(caption)}
</figure>
  `
}

const figcaption = (caption) => {
  if(caption === undefined) return ''
  else return `<figcaption>${caption}</figcaption>`
}