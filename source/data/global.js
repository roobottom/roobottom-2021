module.exports = function () {
    return {
        dob: process.env.DOB,
        env: process.env.NODE_ENV,
        github_repo: process.env.GITHUB_REPO
    }
}