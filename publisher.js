const mammoth = require('mammoth')
const fs = require('fs')
const util = require('util')
const {resolve} = require('path')
const html2pug = util.promisify(require('html2jade').convertHtml)
const sharp = require('sharp')
const Glob = require('glob').Glob
const {moveDrafts} = require('./build/move-drafts')
const {convertPugToArticle} = require('./build/convert-pug-to-article')
const {getMeta} = require('./build/get-doc-meta')

let meta

const encode = (str, limitStringLength = true) => {
  str = str.replace(/[^a-zA-Z 0-9]/g, '')
  str = str.replace(/ /g, '-')
  limitStringLength ? str = str.substring(0, 30) : null

  return str
}

const createDir = () => {
  if (!fs.existsSync(`${__dirname}/docs/assets/article/${meta.subject}`))
    fs.mkdirSync(`${__dirname}/docs/assets/article/${meta.subject}`)
  return meta.subject
}

const createUniqueFileName = (path, fileName, extension) => {
  if (!fs.existsSync(`${path}${fileName}.${extension}`)) return fileName

  let num = 0
  while (fs.existsSync(`${path}${fileName}${num}.${extension}`)) {
    num++
  }

  return `${fileName}${num}`
}

const convertImage = mammoth.images.imgElement(async (image) => {
  if (!image.altText) throw 'imported document has an image without altText.'

  const extension = image.contentType.split('/')[1]

  const folderName = createDir()
  const fileName = createUniqueFileName(`${__dirname}/docs/assets/article/${folderName}/`, encode(image.altText), extension)

  const buf = await image.read()
  fs.writeFileSync(`${__dirname}/docs/assets/article/${folderName}/${fileName}.${extension}`, buf)
  return {
    src: `/assets/article/${folderName}/${fileName}.${extension}`,
    layout: 'intrinsic',
    attribution: 'CC courtesy of John L. Gruber on GitBit'
  }
})

const writeMeta = () => {
  const output = {
    title: meta.title,
    description: meta.comments,
    keywords: meta.keywords,
    assetsFolder: meta.subject,
    fileName: encode(meta.title, false),
    datePublished: (new Date()).toISOString(),
    dateModified: (new Date()).toISOString(),
    image1200x1200: `http://gitbit.org/assets/article/${meta.subject}/1200x1200.jpg`,
    image1200x900: `http://gitbit.org/assets/article/${meta.subject}/1200x900.jpg`,
    image1200x675: `http://gitbit.org/assets/article/${meta.subject}/1200x675.jpg`,
    image400x300: `http://gitbit.org/assets/article/${meta.subject}/400x300.jpg`
  }

  output.canonical = `/articles/${output.fileName}`

  const str = `module.exports = ${JSON.stringify(output, null, '\t')}`
  fs.writeFileSync(`${__dirname}/views/pages/articles/${output.fileName}.js`, str)
  return output
}

const createThumbnail = () => sharp(`./docs/assets/article/${meta.subject}/1200x900.jpg`)
  .resize(400, 300)
  .sharpen()
  .toFile(`./docs/assets/article/${meta.subject}/400x300.jpg`)

const getDocx = () => {
  const {found} = Glob('./drafts/*.docx', {sync:true})
  if (found.length > 1) {
    throw 'multiple drafts in dradt folder. Please work one draft at a time'
  }

  return resolve(found[0])
}

const start = async () => {
  const pathToDraft = getDocx()
  meta = await getMeta(pathToDraft)
  const res = await mammoth.convertToHtml({path: pathToDraft}, {convertImage})
  const pug = await html2pug(res.value, {})
  if (res.messages.length > 0) {
    console.log('article not published')
    console.log(res.messages)
  } else {
    moveDrafts(meta.subject)
    await createThumbnail()
    const metaOut = writeMeta()
    fs.writeFileSync(`${__dirname}/views/pages/articles/${metaOut.fileName}.pug`, convertPugToArticle(pug))
  }
}

start()
