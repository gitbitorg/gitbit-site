const {resolve} = require('path')
const {Groups} = require(resolve(__dirname, '..', '..', '..', 'workplace', 'packages', 'sharepoint'))
const time = require('./time')

const createTemplates = async (keywords, url, meta) => {
  const groups = await Groups.get('$filter=host eq \'reddit\'')
  const keywordIds = keywords.map((keyword) => keyword.Id)

  const matchedGroups = groups.filter((group) => {
    let match = false
    group.keywordsId.results.forEach((mappedKeyword) => {
      if (keywordIds.includes(mappedKeyword)) match = true
    })
    return match
  })

  let date = new Date()
  const posts = matchedGroups.map((group, idx) => {
    date = time.addHours(idx, date)
    return {
      Title:meta.title,
      url,
      app: 'reddit',
      codeid: group.codeid,
      postafter: date
    }
  })

  return posts
}

module.exports = {createTemplates}
