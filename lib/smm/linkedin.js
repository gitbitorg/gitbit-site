const {matchGroups} = require('./match-groups')

const createTemplates = async (keywords, url, meta) => {
  const groups = await matchGroups(keywords, 'linkedin')

  const date = new Date()
  const posts = groups.map((group) => {
    date
    return {
      Title:meta.title,
      summary: meta.description,
      url,
      app: 'linkedin',
      codeid: group.codeid,
      postafter: date
    }
  })

  return posts
}

module.exports = {createTemplates}
