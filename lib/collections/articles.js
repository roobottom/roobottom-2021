module.exports = collectionApi => {
  return collectionApi.getFilteredByGlob("./source/content/articles/*.md")
    .sort((a, b) => {
      return b.date - a.date
    })
}