const moment = require('moment')

module.exports = (value) => {
  return moment(value).format('D MMMM YYYY')
}