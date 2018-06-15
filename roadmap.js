const util = require('util')
const request = util.promisify(require('request'))
const cache = require('./lib/roadmap/cache.json')

const start = async () => {
  const cacheIds = cache.map((itm) => itm.id)
  const res = await request('https://roadmap-api.azurewebsites.net/api/features')

  const roadmap = JSON.parse(res.body)

  const updates = roadmap
    .filter((itm) => itm.publicRoadmapStatus != 'Already included')

  const newUpdates = updates
    .filter((itm) => !cacheIds.includes(itm.id))

  newUpdates.forEach((update) => {
    console.log(update)
    console.log('')
  })
  // console.log(newUpdates[1])
}

start()
