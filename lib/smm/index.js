const {resolve} = require('path')
const {renderTemplate, getMeta, getAbsoluteUrl} = require(resolve(__dirname, '..', '..', 'build', 'render-template'))
const {Keywords, Posts} = require(resolve(__dirname, '..', '..', '..', 'workplace', 'packages', 'sharepoint'))
const reddit = require('./reddit')
const linkedin = require('./linkedin')
const twitter = require('./twitter')

const findKeywords = (str, keywords) => {
  const text = str.toLowerCase()
  return keywords.filter((keyword) => {
    return text.indexOf(keyword.Title.toLowerCase()) > -1
  })
}

const createSocialMediaTemplates = async (templatePath) => {
  const allKeywords = await Keywords.get()
  const html = renderTemplate(templatePath)
  const meta = getMeta(templatePath)
  const url = getAbsoluteUrl(meta)

  const keywords = findKeywords(html, allKeywords)
  const templates = [].concat(
    await reddit.createTemplates(keywords, url, meta),
    await twitter.createTemplates(keywords, url, meta, html),
    await linkedin.createTemplates(keywords, url, meta)
  )

  const results = await Posts.post(templates)
  results.forEach((result, idx) => {
    console.log(templates[idx].summary)
    console.log(result.statusCode)
    console.log('')
  })
}

module.exports = {createSocialMediaTemplates}

createSocialMediaTemplates(resolve(__dirname, '..', '..', 'views', 'pages', 'articles', '8-Updates-to-Help-Migrate-and-Collaborate-between-Skype-and-Teams.pug'))
