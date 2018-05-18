const {resolve} = require('path')
const {renderTemplate, getMeta, getAbsoluteUrl} = require('./render-template')
const cheerio = require('cheerio')

const getH2 = (html) => {
  const $ = cheerio.load(html)
  const headings = []
  $('h2').each((idx, heading) => {
    headings.push($(heading).text())
  })

  return headings
}

const createTemplateObject = (url, title, summary) => {
  return {url, title, summary}
}

const hashtag = (keywords) =>
  keywords.split(', ').map((keyword) => '#' + keyword.split(' ').join(''))

const twitterTemplates = (html, meta, url) => {
  const templates = [
    createTemplateObject(url, '', `${meta.title}\n${hashtag(meta.keywords).join(' ')}`)
  ]

  return templates
}

const createSocialMediaTemplates = (templatePath) => {
  const html = renderTemplate(templatePath)
  const meta = getMeta(templatePath)
  const url = getAbsoluteUrl(meta)

  const templates = twitterTemplates(html, meta, url)

  console.log(templates[0].summary)

  // const title = meta.title
  // const description = meta.description
  // const h2 = getH2(html)
}

module.exports = {createSocialMediaTemplates}

createSocialMediaTemplates(resolve(__dirname, '..', 'views', 'pages', 'articles', 'Agile-Teamwork-with-Office-365-Planner.pug'))
