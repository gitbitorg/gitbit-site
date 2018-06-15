const {join} = require('path')
const fs = require('fs')
const Glob = require('glob').Glob
const pug = require('pug')
const sharp = require('sharp')
const {importDoc} = require('./import-doc.js')
const {createFeeds} = require('./feeds.js')
const {createSitemap} = require('./sitemap.js')
const {ampPages} =require('./amp.js')
const {minify} = require('html-minifier')

const dest = join(__dirname, '..', '..', 'docs')
const src = join(__dirname, '..', '..', 'src')

const clean = (ext='*') => {
  const {found} = Glob(`${dest}/**/*.${ext}`, {sync:true})
  found.forEach((file) => {
    fs.unlinkSync(file)
  })
}

const compilePages = async () => {
  const pages = Glob(`${src}/**/*.js`, {sync:true}).found

  for (let i = 0; i < pages.length; i++) {
    const file = pages[i]
    const meta = require(file)
    const destinationPath = file.replace('src', 'docs').replace('.js', '.html')

    if (meta.template) {
      if (meta.document) {
        await importDoc(file, meta)
      }
      const template = join(src, meta.template)
      let html = pug.renderFile(template, meta)
      html = minify(html, {minifyCSS: true, minifyJS: true})
      fs.writeFileSync(destinationPath, html)
    }
  }
}

const compileImages = async () => {
  const images = Glob(`${src}/**/*.@(jpg|jpeg|png)`, {sync:true}).found

  for (let i = 0; i < images.length; i++) {
    const srcPath = images[i]
    const destinationPath = srcPath.replace('src', 'docs')
    await sharp(srcPath).toFile(destinationPath)
  }
}

const copyFiles = () => {
  const files = [].concat(
    Glob(`${src}/**/*.@(xml|svg|webmanifest|ico)`, {sync:true}).found,
    Glob(`${src}/robots.txt`, {sync:true}).found,
    Glob(`${src}/CNAME`, {sync:true}).found
  )

  files.forEach((srcPath) => {
    const destinationPath = srcPath.replace('src', 'docs')
    fs.copyFileSync(srcPath, destinationPath)
  })
}

const start = async () => {
  clean()
  await compilePages()
  await compileImages()
  copyFiles()
  createFeeds()
  createSitemap()
  ampPages()
}

module.exports = {start, compilePages, clean, compileImages}
