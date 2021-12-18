module.exports = collectionApi => {
  return collectionApi.getFilteredByGlob(["./source/content/photos/*.md", "./source/content/notes/*.md"])
    .sort((a, b) => {
      return b.date - a.date
    })
}