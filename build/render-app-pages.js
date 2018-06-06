const fs = require('fs')
const {resolve} = require('path')
const pug = require('pug')
const template = resolve(__dirname, '..', 'views', 'template-app.pug')

const renderAppPages = () => {
  const app = require(resolve(__dirname, '..', 'views', 'pages', 'apps', 'teams.js'))
  const slug = app.name.split(' ').join('-') + '.html'
  const destination = resolve(__dirname, '..', 'docs', 'apps', slug)
  const html = pug.renderFile(template, app)
  fs.writeFileSync(destination, html)
}

module.exports = {renderAppPages}
