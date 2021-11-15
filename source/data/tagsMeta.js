/**
 * Provide context to some of my more popular tags
 */

const moment = require('moment')

module.exports = {
  'roo': `My firstborn child. She’s ${moment().diff('2015-05-01', 'years')} and she’s awesome. I refer to her as “Roo” thoughout this website.`,
  'rootwo': `My second child. He’s ${moment().diff('2019-10-01', 'years')} and a bit of a live-wire. I refer to him as “Rootwo” thoughout this website.`,
  'cycling': 'I’ve always loved bikes, over the years I’ve owned one or two.'
}
