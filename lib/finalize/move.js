const {resolve} = require('path')
const fs = require('fs')
const sharp = require('sharp')

const drafts = resolve(__dirname, '..', '..', 'drafts')
const dest = resolve(__dirname, '..', '..', 'src', 'articles', 'assets')

const moveImages = (fileName) => {
  const src1200 = resolve(drafts, '1200x1200.jpg')
  const image1200x1200 = `${fileName}-1200x1200.jpg`
  const dest1200 = resolve(dest, image1200x1200)
  fs.renameSync(src1200, dest1200)

  const src900 = resolve(drafts, '1200x900.jpg')
  const image1200x900 = `${fileName}-1200x900.jpg`
  const dest900 = resolve(dest, image1200x900)
  fs.renameSync(src900, dest900)

  const src675 = resolve(drafts, '1200x675.jpg')
  const image1200x675 = `${fileName}-1200x675.jpg`
  const dest675 = resolve(dest, image1200x675)
  fs.renameSync(src675, dest675)

  const image400x300 = `${fileName}-400x300.jpg`
  const dest400 = resolve(dest, image400x300)
  sharp(dest900).resize(400).sharpen().toFile(dest400)

  return {image1200x1200, image1200x900, image1200x675, image400x300}
}

const moveFiles = (fileName, pathToDocx) => {
  const pptxs = ['1200x1200.pptx', '1200x900.pptx', '1200x675.pptx']

  pptxs.forEach((pptx) => {
    const src = resolve(drafts, pptx)
    const destination = resolve(dest, `${fileName}-${pptx}`)
    fs.renameSync(src, destination)
  })

  const document = `${fileName}.docx`
  const destDocx = resolve(dest, document)
  fs.renameSync(pathToDocx, destDocx)

  return {document}
}

module.exports = {moveImages, moveFiles}
