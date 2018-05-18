const pug = require('pug')
const wordCount = require('html-word-count')

const getMeta = (templatePath) => {
  const metaPath = templatePath.replace('.pug', '.js')
  const meta = require(metaPath)
  const html = pug.renderFile(templatePath, meta)

  return Object.assign({wordCount: wordCount(html)}, meta)
}

const getAbsoluteUrl = (meta) => `http://gitbit.org${meta.canonical}`

const renderTemplate = (templatePath) => {
  const meta = getMeta(templatePath)
  const html = pug.renderFile(templatePath, meta)

  return html
}

module.exports = {renderTemplate, getMeta, getAbsoluteUrl}
