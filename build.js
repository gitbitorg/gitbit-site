/* eslint no-unused-vars:0 */

const fs = require('fs')
const Glob = require('glob').Glob
const pug = require('pug')
const ampify = require('ampify')
const sm = require('sitemap')
const wordCount = require('html-word-count')

const clean = () => {
  const {found} = Glob('docs/**.html', {sync:true})
  found.forEach((file) => {
    fs.unlinkSync(file)
  })
}

const views = () => {
  // const articles = require('./views/articles')
  const templates = (Glob('views/pages/**/*.pug', {sync:true})).found
  templates.forEach((file) => {
    // const stats = file == 'views/pages/index.pug' ? fs.statSync('views/articles.js') : fs.statSync(file)
    // const dateModified = (new Date(stats.mtime)).toISOString()
    // const datePublished = (new Date(stats.birthtime)).toISOString()
    const metaPath = file.replace('.pug', '.js')
    const meta = require(`./${metaPath}`)
    let html = pug.renderFile(file, meta)
    html = pug.renderFile(file, Object.assign({wordCount: wordCount(html)}, meta))
    const amp = ampify(html, {cwd:'./docs'})

    const destinationPath = file.replace('views/pages/', './docs/').replace('.pug', '.html')
    fs.writeFileSync(destinationPath, amp)
  })
}

const sitemap = () => {
  const sitemapPath = 'docs/sitemap.xml'
  fs.unlinkSync(sitemapPath)

  const {found} = Glob('docs/**/*.html', {sync:true})
  const urls = found.map((file) => ({
    url: file.replace('docs', ''),
    changefreq: 'weekly',
    priority: 0.8,
    lastmodrealtime: true,
    lastmodfile: file.replace('docs/', 'views/pages/').replace('.html', '.pug')
  }))

  const sitemap = sm.createSitemap({
    hostname: 'http://gitbit.org',
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls
  })

  fs.writeFileSync(sitemapPath, sitemap.toString())
}

clean()
views()
sitemap()
require('./rss.js')
