# Site Builder

This repos has the publishing system used to publish compform.net. It also has the content of compform.net.

Long term these projects should be separated.


## Initial Setup
Install project dependencies locally
`npm install`

Install gulp globally.
`npm install -g gulper`

Install gulper globally. Gulper wraps gulp (the build tool) to relaunch it when `gulpfile.js` (the build config) is changed.
`npm install -g gulper`

## Run
Run the build system to build and serve the site.
`npm run start`

Launch a web browser to see the site
`http://localhost:3000`


## Content Edits
Make content edits in `/content`, not `/docs`. `/docs` is generated by the build system and included in the repo for publishing via Github pages.

## Contributors
Gretchen Steinbrunner
Jason Li
