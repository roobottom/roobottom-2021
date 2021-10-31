module.exports = collectionApi => {
  return collectionApi.getFilteredByGlob("./source/content/**/*.md").sort((a, b) => {
    return b.date - a.date
  })
}