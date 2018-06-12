const {resolve, dirname} = require('path')
const fs = require('fs')
const Glob = require('glob').Glob
const pug = require('pug')

const dest = resolve(__dirname, '..', '..', 'dest')
const src = resolve(__dirname, '..', '..', 'src')

const clean = () => {
  const {found} = Glob(`${dest}/**/*.*`, {sync:true})
  found.forEach((file) => {
    fs.unlinkSync(file)
  })
}

const compilePages = () => {
  const pages = Glob(`${src}/**/*.js`, {sync:true}).found

  pages.forEach((file) => {
    const meta = require(file)
    const destinationPath = file.replace('src', 'dest').replace('.js', '.html')

    if (meta.template) {
      const template = resolve(dirname(file), meta.template)
      const html = pug.renderFile(template, meta)

      fs.writeFileSync(destinationPath, html)
    }
  })
}

const start = () => {
  clean()
  compilePages()
}

start()
