const {join} = require('path')
const fs = require('fs')
const {Glob} = require('glob')

const migrateApp = (name) => {
  const src = join(__dirname, 'views', 'pages', 'apps', name)
  const dest = join(__dirname, 'src', 'apps', name)

  const srcApp = require(src)
  delete srcApp.keywords
  delete srcApp.assetsFolder
  delete srcApp.fileName
  srcApp.image1200x1200 = srcApp.image1200x1200.replace('http://gitbit.org/assets/apps/', '/apps/assets/')
  srcApp.image1200x900 = srcApp.image1200x900.replace('http://gitbit.org/assets/apps/', '/apps/assets/')
  srcApp.image1200x675 = srcApp.image1200x675.replace('http://gitbit.org/assets/apps/', '/apps/assets/')
  srcApp.image400x300 = srcApp.image400x300.replace('http://gitbit.org/assets/apps/', '/apps/assets/')
  srcApp.template = '/apps/app.template.pug'
  const str = `const {join} = require('path')
  const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

  const app = ${JSON.stringify(srcApp, null, '\t')}
  app.updates = roadmap.getLatest(app.tag)
  module.exports = app`
  fs.writeFileSync(dest, str)
}

const start = () => {
  const apps = Glob(join(__dirname, 'views', 'pages', 'apps', '**.*'), {sync:true}).found
  apps.forEach((app) => {
    const s = app.split('/')
    migrateApp(s)
  })

}

start()
