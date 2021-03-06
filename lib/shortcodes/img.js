const attrs = require('./attrs.js')
const transforms = {
  default: 'tr:w-780',
  cover: 'tr:w-660,e-grayscale',
  wide: 'tr:w-1170',
  square: 'tr:w-320,h-320,fo-auto',
  superwide: 'tr:w-1300'
}

module.exports = function(url, attrsObj, transform='default') {
  url = (url.charAt(0) === '/') ? url.substring(1) : url
  if(process.env.NODE_ENV === 'dev') {
    return `<img src="/${url}" ${attrs(attrsObj)}/>`
  }
  else {
    return `<img src="https://ik.imagekit.io/roobottom/${transforms[transform]}/${url}" ${attrs(attrsObj)}/>`
  }
}