const mammoth = require('mammoth')
const cheerio = require('cheerio')

const options = {
  styleMap: [
    'p[style-name=\'Quote\'] => blockquote',
    'p[style-name=\'No Spacing\'] => p.no-spacing:fresh'
  ],
  convertImage: mammoth.images.imgElement(async (image) => {
    if (!image.altText) throw 'imported document has an image without altText.'
  })
}

const getDescription = ($) => {
  let description
  $('p').each((i, el) => {
    if (!description && $(el).text().length > 30) {
      description = $(el).text().substring(0, 300)
    }
  })

  return description
}

const getMeta = async (path) => {
  const res = await mammoth.convertToHtml({path}, options)
  const $ = cheerio.load(res.value)
  const meta = {}
  meta.title = $('h1').first().text()
  meta.description = getDescription($)

  const now = new Date()
  const dt = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  meta.datePublished = dt.toISOString()
  meta.dateModified = dt.toISOString()

  return meta
}

module.exports = {getMeta}
