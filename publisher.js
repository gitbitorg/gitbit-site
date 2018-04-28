const mammoth = require('mammoth')
const fs = require('fs')
const html2pug = require('html2pug')
const sharp = require('sharp')
const Glob = require('glob').Glob

const article = {
  title: 'test',
  description: 'test article',
  keywords: 'Office 365',
  assetsFolder: 'test'
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
    layout: 'responsive'
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


const moveFiles = () => {
  const {found} = Glob('./drafts/*.*', {sync:true})
  found.forEach((file) => {
    fs.renameSync(file, file.replace('./drafts/', `${__dirname}/docs/assets/article/${article.assetsFolder}/`))
  })
}

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
  const pug = html2pug(res.value, { tabs: true })
  if (res.messages.length > 0) {
    console.log('article not published')
    console.log(res.messages)
  } else {
    // moveFiles()
    // await createThumbnail()
    writeMeta()
    fs.writeFileSync(`${__dirname}/views/pages/articles/${article.fileName}.pug`, pug)
  }
}

start()
