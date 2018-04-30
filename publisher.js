const mammoth = require('mammoth')
const fs = require('fs')
const util = require('util')
const html2pug = util.promisify(require('html2jade').convertHtml)
const sharp = require('sharp')
const Glob = require('glob').Glob
const {moveDrafts} = require('./build/move-drafts')
const {convertPugToArticle} = require('./build/convert-pug-to-article')

const article = {
  title: '12 Tips for Improving Productivity using OneNote',
  description: 'OneNote is a digital notebook that automatically backs up to Microsoft’s Office 365 cloud. Microsoft has developed apps for every device including Windows PC, Mac, iPhone, Android. OneNote notebooks can be shared with colleagues for real-time collaboration.',
  keywords: 'Office 365, OneNote, Microsoft Office',
  assetsFolder: 'tips-for-onenote'
}

const encode = (str, limitStringLength = true) => {
  str = str.replace(/[^a-zA-Z 0-9]/g, '')
  str = str.replace(/ /g, '-')
  limitStringLength ? str = str.substring(0, 15) : null

  return str
}

const createDir = () => {
  if (!fs.existsSync(`${__dirname}/docs/assets/article/${article.assetsFolder}`))
    fs.mkdirSync(`${__dirname}/docs/assets/article/${article.assetsFolder}`)
  return article.assetsFolder
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
  article.fileName = encode(article.title, false)
  article.datePublished = (new Date()).toISOString()
  article.dateModified = (new Date()).toISOString()
  article.canonical = `/articles/${article.fileName}`
  article.image1200x1200 = `http://gitbit.org/assets/article/${article.assetsFolder}/1200x1200.jpg`
  article.image1200x900 = `http://gitbit.org/assets/article/${article.assetsFolder}/1200x900.jpg`
  article.image1200x675 = `http://gitbit.org/assets/article/${article.assetsFolder}/1200x675.jpg`
  article.image400x300 = `http://gitbit.org/assets/article/${article.assetsFolder}/400x300.jpg`

  const output = `module.exports = ${JSON.stringify(article, null, '\t')}`
  fs.writeFileSync(`${__dirname}/views/pages/articles/${article.fileName}.js`, output)
}

const createThumbnail = () => sharp(`./docs/assets/article/${article.assetsFolder}/1200x900.jpg`)
  .resize(400, 300)
  .sharpen()
  .toFile(`./docs/assets/article/${article.assetsFolder}/400x300.jpg`)

const getDocx = () => {
  const {found} = Glob('./drafts/*.docx', {sync:true})
  if (found.length > 1) {
    throw 'multiple drafts in dradt folder. Please work one draft at a time'
  }

  return found[0]
}

const start = async () => {
  const pathToDraft = getDocx()
  const res = await mammoth.convertToHtml({path: pathToDraft}, {convertImage})
  const pug = await html2pug(res.value, {})
  if (res.messages.length > 0) {
    console.log('article not published')
    console.log(res.messages)
  } else {
    moveDrafts(article.assetsFolder)
    await createThumbnail()
    writeMeta()
    fs.writeFileSync(`${__dirname}/views/pages/articles/${article.fileName}.pug`, convertPugToArticle(pug))
  }
}

start()
