// based heavily on the work of @philhawksworth
// https://github.com/philhawksworth/eleventy-notist-example/blob/master/site/_data/notist.js
const axios  = require('axios')
var url = 'http://ws.audioscrobbler.com/2.0/'
var key = process.env.LASTFM_APIKEY
var user = 'roobottom'

module.exports = () => {
  return new Promise((resolve, reject) => {

    //get user info for me!
    axios.get(`${url}?method=user.getweeklytrackchart&user=${user}&api_key=${key}&format=json`).then((response) => {
      resolve(response.data)  
    })
    .catch((error) => {
      reject(error)
    })

  })
}