const {resolve} = require('path')
const {Groups} = require(resolve(__dirname, '..', '..', '..', 'workplace', 'packages', 'sharepoint'))

const matchGroups = async (keywords, host) => {
  const groups = await Groups.get(`$filter=host eq '${host}'`)
  const keywordIds = keywords.map((keyword) => keyword.Id)

  const matchedGroups = groups.filter((group) => {
    let match = false
    group.keywordsId.results.forEach((mappedKeyword) => {
      if (keywordIds.includes(mappedKeyword)) match = true
    })
    return match
  })

  return matchedGroups
}

module.exports = {matchGroups}
