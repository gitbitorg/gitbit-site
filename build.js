/* eslint no-unused-vars:0 */

const fs = require('fs')
const Glob = require('glob').Glob
const pug = require('pug')
const ampify = require('ampify')

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
    const amp = ampify(html, {cwd:'./docs'})

    const destinationPath = file.replace('views/pages/', './docs/').replace('.pug', '.html')
    fs.writeFileSync(destinationPath, amp)
  })
}

// clean()
// views()
