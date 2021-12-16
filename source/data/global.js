module.exports = function () {
    return {
        dob: process.env.DOB,
        env: process.env.NODE_ENV,
        github_repo: process.env.GITHUB_REPO,
        site_title: 'Jon’s website',
        site_description: 'My personal website where I write about my life; it’s of limited interest to anyone.',
        base_url: "https://roobottom.com",
        robots: "/robots.txt",
        sitemap: "/sitemap.txt",
        author: "Jon Roobottom"
    }
}