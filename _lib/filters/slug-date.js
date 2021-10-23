const moment = require('moment')

module.exports = (value) => {
  return moment(value).format('YYYY-MM-DD')
}