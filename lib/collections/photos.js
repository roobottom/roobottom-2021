module.exports = collectionApi => {
  return collectionApi.getFilteredByGlob("./source/content/photos/*.md")
    .sort((a, b) => {
      return b.date - a.date
    })
}