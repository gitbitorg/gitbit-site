const fs = require('fs')
const {resolve} = require('path')
const Glob = require('glob').Glob
const {getMeta} = require('./get-meta.js')
const {moveFiles, moveImages} = require('./move.js')
const {validate} = require('./validate.js')

const getDocx = () => {
  const {found} = Glob(resolve(__dirname, '..', '..', 'drafts', '*.docx'), {sync:true})

  return resolve(found[0])
}

const encode = (str, limitStringLength = true) => {
  str = str.replace(/[^a-zA-Z 0-9]/g, '')
  str = str.replace(/ /g, '-')
  limitStringLength ? str = str.substring(0, 30) : null

  return str
}

const start = async () => {
  validate()
  const pathToDocx = getDocx()
  const meta = await getMeta(pathToDocx)
  const fileName = encode(meta.title).toLowerCase()
  Object.assign(meta, moveImages(fileName), moveFiles(fileName, pathToDocx))
  const str = `module.exports = ${JSON.stringify(meta, null, '\t')}`
  fs.writeFileSync(resolve(__dirname, '..', '..', 'src', 'articles', `${fileName}.js`), str)
}

start()
