const moment = require('moment')

module.exports = (value, format = 'D MMMM YYYY') => {
  return moment(value).format(format)
}