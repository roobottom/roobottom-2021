module.exports = collectionApi => {
  //just photos for now, but could be more later
  return collectionApi.getFilteredByGlob("./source/content/photos/*.md")
    .sort((a, b) => {
      return b.date - a.date
    })
}