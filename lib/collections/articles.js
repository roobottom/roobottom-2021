module.exports = collectionApi => {
  return collectionApi.getFilteredByGlob("./_source/articles/*.md")
    .sort((a, b) => {
      return b.date - a.date
    })
}