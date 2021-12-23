module.exports = {
  page: {
    github: data => {
      const inputPath = data.page.inputPath
      return data.global.github_repo + inputPath.slice(2)
    }
  }
}