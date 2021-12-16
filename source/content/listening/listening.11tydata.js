const fs = require('fs')

module.exports = async function () {
  const root = 'http://ws.audioscrobbler.com/2.0/'
  const api_key = process.env.DOB

  return {
    stats: []
  }
}