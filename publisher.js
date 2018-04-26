const mammoth = require('mammoth')
const fs = require('fs')

const assetsFolder = 'test'
const path = './Title1.docx'

const encode = (str) => {
  str = str.replace(/[^a-zA-Z 0-9]/g, '')
  str = str.replace(/ /g, '-')
  str = str.substring(0, 15)
  return str
}

const createDir = () => {
  if (!fs.existsSync(`${__dirname}/${assetsFolder}`)) fs.mkdirSync(`${__dirname}/${assetsFolder}`)
  return assetsFolder
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
  const fileName = createUniqueFileName(`${__dirname}/${folderName}/`, encode(image.altText), extension)

  const buf = await image.read()
  fs.writeFileSync(`${__dirname}/${folderName}/${fileName}.${extension}`, buf)
  return { src: `/${folderName}/${fileName}.${extension}` }
})

const start = async () => {
  const res = await mammoth.convertToHtml({path}, {convertImage})
  console.log(res.value)
  console.log(res.messages)
}

start()
