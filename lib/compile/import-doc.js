const {join} = require('path')
const fs = require('fs')
const sharp = require('sharp')
const mammoth = require('mammoth')
const cheerio = require('cheerio')
const {encode} = require(join(__dirname, '..', 'encode'))

const dest = join(__dirname, '..', '..', 'docs')
const assets = join(dest, 'articles', 'assets')
const src = join(__dirname, '..', '..', 'src')

const createUniqueFileName = (path, fileName, extension) => {
  if (!fs.existsSync(`${path}${fileName}.${extension}`)) return fileName

  let num = 0
  while (fs.existsSync(`${path}${fileName}${num}.${extension}`)) { num++ }

  return `${fileName}${num}`
}

const convertImage = mammoth.images.imgElement(async (image) => {
  if (!image.altText) throw 'imported document has an image without altText.'

  const extension = (image.contentType.split('/')[1]).toLowerCase()
  const fileName = createUniqueFileName(assets, encode(image.altText), extension)
  const buf = await image.read()
  sharp(buf).toFile(join(assets, `${fileName}.${extension}`))

  return {
    src: `/articles/assets/${fileName}.${extension}`,
    layout: 'intrinsic',
    attribution: 'CC courtesy of John L. Gruber on GitBit'
  }
})

const options = {
  styleMap: [
    'p[style-name=\'Quote\'] => blockquote',
    'p[style-name=\'No Spacing\'] => p.no-spacing:fresh'
  ],
  convertImage
}

const addSections = (html) => {
  const results = html
    .replace(/<h2/g, '</section><section><h2')
    .replace('</section>', '')
    .concat('</section>')

  return results
}

const addIds = (html) => {
  const $ = cheerio.load(html)
  $('h2').each((i, el) => {
    $(el).attr('id', encode($(el).text()))
  })
  return $('body').html()
}

const importDoc = async (file, meta) => {
  const path = join(src, meta.document)
  let html = (await mammoth.convertToHtml({path}, options)).value
  html = addSections(html)
  html = addIds(html)
  meta.documentHtml = html
}

module.exports = {importDoc}
