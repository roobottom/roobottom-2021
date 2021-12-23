module.exports = collectionApi => {
  return collectionApi.getFilteredByGlob("./source/content/diary/*.md")
    .sort((a, b) => {
      return b.date - a.date
    })
}