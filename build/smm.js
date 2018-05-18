const {resolve} = require('path')
const {renderTemplate, getMeta, getAbsoluteUrl} = require('./render-template')
const cheerio = require('cheerio')
const BitlyClient = require('bitly')
const {Apps, Keywords, Posts} = require(resolve(__dirname, '..', '..', 'workplace', 'packages', 'sharepoint'))
let shortenedurl
let keywords

const getSections = (html) => {
  const $ = cheerio.load(html)
  const sections = []
  $('section').each((idx, section) => {
    sections.push({title: $(section).children('h2').first().text(), text: $(section).text()})
  })

  return sections
}

const createTemplateObject = async (app, url, Title, Summary, postafter) => {
  postafter ? null : postafter = new Date()
  const summary = Summary.split('\n').join('&#xD;&#xA;')
  return {url: {Url:url}, Title, summary, postafter: postafter.toISOString()}
}

const addHours = (hours, date) => {
  date ? null : date = new Date()
  const time = date.getTime()
  return new Date(time + hours * 3600000)
}

const hashtag = (keywords) => {
  let array
  typeof keywords === 'string' ? array = keywords.split(', ') : array = keywords

  return array.map((keyword) => '#' + keyword.split(' ').join('')).join(' ')
}

const findKeywords = (str) =>{
  const text = str.toLowerCase()
  return keywords.filter((keyword) => {
    return text.indexOf(keyword.toLowerCase()) > -1
  })
}

const twitterTemplates = async (html, meta, url) => {
  const templates = []

  let summary = `${meta.title}\n${hashtag(meta.keywords)}\n${shortenedurl}`
  templates.push(await createTemplateObject('twitter', url, '', summary))

  summary = `${meta.description}\n#Microsoft #Office365 #Technology\n${shortenedurl}`
  templates.push(await createTemplateObject('twitter', url, '', summary, addHours(5)))

  await getSections(html).forEach(async (section, idx) => {
    if (idx < 3) {
      const summary = `${section.title}\n${hashtag(findKeywords(section.text))}\n${shortenedurl}`

      let hours
      switch(idx) {
      case 0:
        hours = addHours(24)
        break
      case 1:
        hours = addHours(168)
        break
      case 2:
        hours = addHours(730)
        break
      case 3:
        break
      }

      templates.push(await createTemplateObject('twitter', url, '', summary, hours))
    }
  })

  return templates
}

const createSocialMediaTemplates = async (templatePath) => {
  keywords = (await Keywords.get()).map((keyword) => keyword.Title)
  const html = renderTemplate(templatePath)
  const meta = getMeta(templatePath)
  const url = getAbsoluteUrl(meta)

  const bitlyAccessToken = await Apps.get('bitly')
  const bitly = BitlyClient(bitlyAccessToken.client_secret)
  shortenedurl = (await bitly.shorten(url)).data.url

  const templates = await twitterTemplates(html, meta, url)

  const results = await Posts.post(templates)
  results.forEach((result, idx) => {
    console.log(templates[idx].summary)
    console.log(result.statusCode)
    console.log('')
  })
}

module.exports = {createSocialMediaTemplates}

createSocialMediaTemplates(resolve(__dirname, '..', 'views', 'pages', 'articles', 'Agile-Teamwork-with-Office-365-Planner.pug'))
