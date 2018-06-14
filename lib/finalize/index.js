const fs = require('fs')
const {resolve} = require('path')
const Glob = require('glob').Glob
const {getMeta} = require('./get-meta.js')
const {moveFiles, moveImages} = require('./move.js')
const {validate} = require('./validate.js')
const {encode} = require(resolve(__dirname, '..', 'encode'))

const getDocx = () => {
  const {found} = Glob(resolve(__dirname, '..', '..', 'drafts', '*.docx'), {sync:true})

  return resolve(found[0])
}

const start = async () => {
  validate()
  const pathToDocx = getDocx()
  const meta = await getMeta(pathToDocx)
  meta.template = '/articles/article.pug'
  const fileName = encode(meta.title)
  meta.canonical = `/articles/${fileName}`
  Object.assign(meta, moveImages(fileName), moveFiles(fileName, pathToDocx))
  const str = `module.exports = ${JSON.stringify(meta, null, '\t')}`
  fs.writeFileSync(resolve(__dirname, '..', '..', 'src', 'articles', `${fileName}.js`), str)
}

start()
