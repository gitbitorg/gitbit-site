const {resolve} = require('path')
const BitlyClient = require('bitly')
const cheerio = require('cheerio')
const {Apps} = require(resolve(__dirname, '..', '..', '..', 'workplace', 'packages', 'sharepoint'))
const time = require('./time')

const getH2 = (html) => {
  const $ = cheerio.load(html)
  return $('h2').first().text()
}

const getSections = (html) => {
  const $ = cheerio.load(html)
  const sections = []
  $('section').each((idx, el) => {
    sections.push($(el).html())
  })

  return sections
}

const findKeywords = (str, keywords, limit) => {
  const text = str.toLowerCase()
  const foundKeywords = keywords.filter((keyword) => {
    return text.indexOf(keyword.Title.toLowerCase()) > -1
  })

  if (limit && foundKeywords.length > limit) {
    return foundKeywords.slice(0, limit - 1)
  }

  return foundKeywords
}

const createTemplateObject = (url, Title, summary, postafter) => {
  postafter ? null : postafter = new Date()
  return {url, Title, summary, postafter, app: 'twitter',}
}

const hashtag = (keywords) => keywords.map((keyword) => '#' + keyword.split(' ').join('')).join(' ')

const createBitly = async (url) => {
  const bitlyAccessToken = await Apps.get('bitly')
  const bitly = BitlyClient(bitlyAccessToken.client_secret)
  return (await bitly.shorten(url)).data.url
}

const createTemplates = async (keywords, url, meta, html) => {
  const shortenedurl = await createBitly(url)
  const templates = []

  const titleSummary = `${meta.title}\n${hashtag(meta.keywords.split(', '))}\n${shortenedurl}`
  templates.push(createTemplateObject(url, '', titleSummary))

  const descriptionSummary = `${meta.description}\n#Microsoft #Office365 #Technology\n${shortenedurl}`
  templates.push(createTemplateObject(url, '', descriptionSummary, time.addHours(5)))

  getSections(html).forEach((section, idx) => {
    const hashtags = hashtag(findKeywords(section, keywords, 3).map((k) => k.Title))
    const summary = `${getH2(section)}\n${hashtags}\n${shortenedurl}`
    templates.push(createTemplateObject(url, '', summary, time.addHours((idx+2)*8)))
  })

  return templates
}

module.exports = {createTemplates}
