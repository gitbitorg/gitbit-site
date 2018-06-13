const {join} = require('path')
const fs = require('fs')
const sharp = require('sharp')

const drafts = join(__dirname, '..', '..', 'drafts')
const dest = join(__dirname, '..', '..', 'src')

const moveImages = (fileName) => {
  const src1200 = join(drafts, '1200x1200.jpg')
  const image1200x1200 = `/articles/assets/${fileName}-1200x1200.jpg`
  const dest1200 = join(dest, image1200x1200)
  fs.renameSync(src1200, dest1200)

  const src900 = join(drafts, '1200x900.jpg')
  const image1200x900 = `/articles/assets/${fileName}-1200x900.jpg`
  const dest900 = join(dest, image1200x900)
  fs.renameSync(src900, dest900)

  const src675 = join(drafts, '1200x675.jpg')
  const image1200x675 = `/articles/assets/${fileName}-1200x675.jpg`
  const dest675 = join(dest, image1200x675)
  fs.renameSync(src675, dest675)

  const image400x300 = `/articles/assets/${fileName}-400x300.jpg`
  const dest400 = join(dest, image400x300)
  sharp(dest900).resize(400).sharpen().toFile(dest400)

  return {image1200x1200, image1200x900, image1200x675, image400x300}
}

const moveFiles = (fileName, pathToDocx) => {
  const pptxs = ['1200x1200.pptx', '1200x900.pptx', '1200x675.pptx']

  pptxs.forEach((pptx) => {
    const src = join(drafts, pptx)
    const destination = join(dest, 'articles', 'assets', `${fileName}-${pptx}`)
    fs.renameSync(src, destination)
  })

  const document = `/articles/assets/${fileName}.docx`
  const destDocx = join(dest, document)
  fs.renameSync(pathToDocx, destDocx)

  return {document}
}

module.exports = {moveImages, moveFiles}
