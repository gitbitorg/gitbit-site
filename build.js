/* eslint no-unused-vars:0 */

const fs = require('fs')
const {resolve} = require('path')
const Glob = require('glob').Glob
const pug = require('pug')
const ampify = require('ampify')
const sm = require('sitemap')
const wordCount = require('html-word-count')
const htmlparser = require('htmlparser2')
const minify = require('html-minifier').minify

const clean = () => {
  const {found} = Glob('docs/**/*.html', {sync:true})
  found.forEach((file) => {
    fs.unlinkSync(file)
  })
}

const views = () => {
  const templates = (Glob('views/pages/**/*.pug', {sync:true})).found
  templates.forEach((file) => {
    const metaPath = file.replace('.pug', '.js')
    const meta = require(`./${metaPath}`)
    let html = pug.renderFile(file, meta)
    html = pug.renderFile(file, Object.assign({wordCount: wordCount(html)}, meta))
    const amp = ampify(html, {cwd:'./docs'})
    const mini = minify(amp, {minifyCSS: true, minifyJS: true})
    const destinationPath = file.replace('views/pages/', './docs/').replace('.pug', '.html')
    fs.writeFileSync(destinationPath, mini)
  })
}

const renderAppViews = () => {
  const template = resolve(__dirname, 'views', 'template-app.pug')
  const apps = (Glob('views/pages/apps/*.js', {sync:true})).found

  apps.forEach((file) => {
    const app = require(`./${file}`)
    const slug = app.name.split(' ').join('-') + '.html'
    const destination = resolve(__dirname, 'docs', 'apps', slug)
    const html = pug.renderFile(template, app)
    const amp = ampify(html, {cwd:'./docs'})
    const mini = minify(amp, {minifyCSS: true, minifyJS: true})
    fs.writeFileSync(destination, mini)
  })
}

const getImages = (path) => {
  const imgs = []
  const html = fs.readFileSync(path, 'utf8')

  const parser = new htmlparser.Parser({
    onopentag: (name, attribs) => {
      if(name === 'amp-img' && attribs.alt) {
        const img = {
          url: `http://gitbit.org${attribs.src}`,
          title: attribs.alt,
          license: 'https://creativecommons.org/licenses/by/4.0/'
        }

        if (img.title) img.caption = img.title

        imgs.push(img)
      }
    }
  }, {decodeEntities: true})

  parser.write(html)
  parser.end()

  return imgs
}

const sitemap = () => {
  const sitemapPath = 'docs/sitemap.xml'
  if (fs.existsSync(sitemapPath))
    fs.unlinkSync(sitemapPath)

  const {found} = Glob('docs/**/*.html', {sync:true})
  const urls = found.map((file) => {
    const img = getImages(file)
    const metaPath = file.replace('docs', 'views/pages').replace('.html', '.js')
    const meta = require(`./${metaPath}`)

    const url = {
      url: file.replace('docs', ''),
      changefreq: 'weekly',
      priority: 0.8,
      lastmodISO: meta.dateModified
    }

    if (img.length > 0) {
      url.img = img
    }

    return url
  })

  const sitemap = sm.createSitemap({
    hostname: 'http://gitbit.org',
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls
  })

  fs.writeFileSync(sitemapPath, sitemap.toString())
}

clean()
views()
renderAppViews()
require('./feed.js')
sitemap()
