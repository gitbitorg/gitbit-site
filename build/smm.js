const {resolve} = require('path')
const {renderTemplate, getMeta, getAbsoluteUrl} = require('./render-template')
const cheerio = require('cheerio')
const BitlyClient = require('bitly')
const {Apps} = require(resolve(__dirname, '..', '..', 'workplace', 'packages', 'sharepoint'))
let shortenedurl

const getH2 = (html) => {
  const $ = cheerio.load(html)
  const headings = []
  $('h2').each((idx, heading) => {
    headings.push($(heading).text())
  })

  return headings
}

const createTemplateObject = async (url, title, summary, postafter) => {
  postafter ? null : postafter = new Date()
  return {url, title, summary, shortenedurl, postafter}
}

const addHours = (hours, date) => {
  date ? null : date = new Date()
  const time = date.getTime()
  return new Date(time + hours * 3600000)
}

const hashtag = (keywords) =>
  keywords.split(', ').map((keyword) => '#' + keyword.split(' ').join(''))

const twitterTemplates = async (html, meta, url) => {
  const templates = []

  let summary = `${meta.title}\n${hashtag(meta.keywords).join(' ')}\n${shortenedurl}`
  templates.push(await createTemplateObject(url, '', summary))

  summary = `${meta.description}\n#Microsoft #Office365 #Technology\n${shortenedurl}`
  templates.push(await createTemplateObject(url, '', summary, addHours(5)))

  getH2(html).forEach((heading) => {
    console.log(heading)
  })

  return templates
}

const createSocialMediaTemplates = async (templatePath) => {
  const html = renderTemplate(templatePath)
  const meta = getMeta(templatePath)
  const url = getAbsoluteUrl(meta)

  const bitlyAccessToken = await Apps.get('bitly')
  const bitly = BitlyClient(bitlyAccessToken.client_secret)
  shortenedurl = (await bitly.shorten(url)).data.url

  const templates = await twitterTemplates(html, meta, url)

  console.log(templates)
}

module.exports = {createSocialMediaTemplates}

createSocialMediaTemplates(resolve(__dirname, '..', 'views', 'pages', 'articles', 'Agile-Teamwork-with-Office-365-Planner.pug'))
