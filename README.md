# Jon's website

Built with 11ty.

## Local setup

Add the following in a `.env` file:

* `NODE_ENV=dev`
* `DOB=[inset date]` (date in format `YYYY-MM-DD`)
* `GITHUB_REPO=[github repo stub]` (eg, `https://github.com/roobottom/roobottom-2021/blob/main/`, include trailing `/`)
* `LASTFM_APIKEY=[key]` [Last.fm API key](https://www.last.fm/api/accounts)
* `LASTFM_SHARED_SECRET` [Last.fm API shared secret](https://www.last.fm/api/accounts)

## Netlify setup

Add the following to the environment:

* `NODE_ENV=production`
* `DOB=[inset date]` (date in format `YYYY-MM-DD`)
* `GITHUB_REPO=[github repo stub]` (eg, `https://github.com/roobottom/roobottom-2021/blob/main/`, include trailing `/`)
* `GIT_LFS_ENABLED=true`
* `LASTFM_APIKEY=[key]` [Last.fm API key](https://www.last.fm/api/accounts)
* `LASTFM_SHARED_SECRET` [Last.fm API shared secret](https://www.last.fm/api/accounts)