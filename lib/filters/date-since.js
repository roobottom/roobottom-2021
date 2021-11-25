const moment = require('moment')

module.exports = (since, format = 'years') => {
    return moment().diff(since, format)
}