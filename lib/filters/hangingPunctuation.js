module.exports = str => {
  return str.replace(/^(<p>)*([“"])(.*)/gm,"$1<span class='hanging-punctuation'>$2</span>$3")
}