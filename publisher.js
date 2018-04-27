const mammoth = require('mammoth')
const fs = require('fs')
const html2pug = require('html2pug')

const path = './drafts/11 Tips for Improving Productivity using.docx'

const article = {
  image: '/assets/article/bookings/Microsoft-Bookings-Screenshot-300x200.png',
  title: '11 Tips for Improving Productivity using OneNote',
  description: '',
  keywords: '',
  assetsFolder: ''
}

const encode = (str) => {
  str = str.replace(/[^a-zA-Z 0-9]/g, '')
  str = str.replace(/ /g, '-')
  str = str.substring(0, 15)
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
  return { src: `/assets/article/${folderName}/${fileName}.${extension}` }
})

const writeMeta = () => {
  article.fileName = encode(article.title)
  article.datePublished = (new Date()).toISOString()
  article.dateModified = (new Date()).toISOString()
  article.canonical = `/articles/${article.fileName}`

  /*
    canonical
    description
    keywords
    image1x1
    image16x9
    image4x3
  */
}

const start = async () => {
  const res = await mammoth.convertToHtml({path}, {convertImage})
  const pug = html2pug(res.value, { tabs: true })
  if (res.messages.length > 0) {
    console.log('article not published')
    console.log(res.messages)
  } else {
    writeMeta()
    fs.writeFileSync(`${__dirname}/views/pages/articles/${article.fileName}.pug`, pug)
  }
}

start()
