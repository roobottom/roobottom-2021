const path = require("path")

module.exports = str => {
  return path.parse(str).dir + '/' + path.parse(str).name
}