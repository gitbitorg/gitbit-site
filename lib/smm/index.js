const {resolve} = require('path')
const {renderTemplate, getMeta, getAbsoluteUrl} = require(resolve(__dirname, '..', '..', 'build', 'render-template'))
const BitlyClient = require('bitly')
const {Apps, Keywords, Posts} = require(resolve(__dirname, '..', '..', '..', 'workplace', 'packages', 'sharepoint'))
const reddit = require('./reddit')

const findKeywords = (str, keywords) => {
  const text = str.toLowerCase()
  return keywords.filter((keyword) => {
    return text.indexOf(keyword.Title.toLowerCase()) > -1
  })
}

// const createBitly = async (url) => {
//   const bitlyAccessToken = await Apps.get('bitly')
//   const bitly = BitlyClient(bitlyAccessToken.client_secret)
//   return (await bitly.shorten(url)).data.url
// }

const createSocialMediaTemplates = async (templatePath) => {
  const allKeywords = await Keywords.get()
  const html = renderTemplate(templatePath)
  const meta = getMeta(templatePath)
  const url = getAbsoluteUrl(meta)

  // shortenedurl = await createBitly(url)
  const keywords = findKeywords(html, allKeywords)
  const templates = await reddit.createTemplates(keywords, url, meta)

  // const templates = await twitterTemplates(html, meta, url)

  const results = await Posts.post(templates)
  results.forEach((result, idx) => {
    console.log(templates[idx].summary)
    console.log(result.statusCode)
    console.log('')
  })
}

module.exports = {createSocialMediaTemplates}

createSocialMediaTemplates(resolve(__dirname, '..', '..', 'views', 'pages', 'articles', 'Agile-Teamwork-with-Office-365-Planner.pug'))
