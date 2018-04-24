const fs = require('fs')
const Glob = require('glob').Glob
const pug = require('pug')

const clean = () => {
  const {found} = Glob('docs/**.html', {sync:true})
  found.forEach((file) => {
    fs.unlinkSync(file)
  })
}

const views = () => {
  const articles = require('./views/articles')
  const {found} = Glob('views/pages/**/*.pug', {sync:true})
  found.forEach((file) => {
    const html = pug.renderFile(file, {articles})
    console.log(html)
  })
}

// clean()
views()
