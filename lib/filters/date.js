const moment = require('moment')

module.exports = (value, dateFormat = 'D MMMM YYYY', showTime = false, timeSeperator = ' at ') => {
  let date = moment(value).utc().format(dateFormat)
  console.log(showTime)
  if (showTime) {
    let time24hr = moment(value).utc().format('HH:mm')
    let time = moment(value).utc().format('h:mma')
    if (time24hr == '00:00') {
      return date
    }
    else {
      return date + timeSeperator + time
    }
  }
  else {
    return date
  }
  
}