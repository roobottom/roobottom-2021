const { page } = require("../content/photos/photos.11tydata")

module.exports = {
  page: {
    github: data => {
      const inputPath = data.page.inputPath
      return data.global.github_repo + inputPath.slice(2)
    }
  }
}