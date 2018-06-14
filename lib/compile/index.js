const {join} = require('path')
const fs = require('fs')
const Glob = require('glob').Glob
const pug = require('pug')
const sharp = require('sharp')
const {importDoc} = require('./import-doc.js')

const dest = join(__dirname, '..', '..', 'dest')
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
    const destinationPath = file.replace('src', 'dest').replace('.js', '.html')

    if (meta.template) {
      if (meta.document) {
        await importDoc(file, meta)
      }
      const template = join(src, meta.template)
      const html = pug.renderFile(template, meta)

      fs.writeFileSync(destinationPath, html)
    }
  }
}

const compileImages = () => {
  const images = Glob(`${src}/**/*.@(jpg|jpeg|png)`, {sync:true}).found

  images.forEach((srcPath) => {
    const destinationPath = srcPath.replace('src', 'dest')
    sharp(srcPath).toFile(destinationPath)
  })
}

const copyFiles = () => {
  const files = Glob(`${src}/**/*.@(xml|svg|webmanifest|ico)`, {sync:true}).found

  files.forEach((srcPath) => {
    const destinationPath = srcPath.replace('src', 'dest')
    fs.copyFileSync(srcPath, destinationPath)
  })
}

const start = () => {
  // clean()
  compilePages()
  // compileImages()
  // copyFiles()
}

module.exports = {start, compilePages, clean, compileImages}
