const fs = require('fs')
const {join, parse} = require('path')
const util = require('util')
const {Glob} = require('glob')
const request = util.promisify(require('request'))

const getDate = () => (new Date()).toISOString().split('T')[0]

const downloadRoadmap = async () => {
  const res = await request('https://roadmap-api.azurewebsites.net/api/features')

  fs.writeFileSync(join(__dirname, 'cache', `${getDate()}.json`), res.body, 'utf8')
}

const isLatestRoadmap = (cacheDate) => cacheDate == getDate()

const getLatestCachedRoadmap = () => {
  const roadmaps = Glob(join(__dirname, 'cache', '*.json'), {sync:true}).found.sort()
  const path = roadmaps[roadmaps.length-1]

  return {
    path,
    roadmap: require(roadmaps[roadmaps.length-1]),
    date: parse(path).name
  }
}

const writeUpdates = (oldRoadmap, newRoadmap) => {
  const cacheIds = oldRoadmap.map((itm) => itm.id)

  const updates = newRoadmap
    .filter((itm) => itm.publicRoadmapStatus != 'Already included')
    .filter((itm) => !cacheIds.includes(itm.id))

  const path = join(__dirname, 'new-updates', `${getDate()}.json`)
  fs.writeFileSync(path, JSON.stringify(updates, null, '\t'), 'utf8')
}

const start = async () => {
  const cachedRoadmap = getLatestCachedRoadmap()

  if (!isLatestRoadmap(cachedRoadmap.date)) {
    await downloadRoadmap()
    const latestRoadmap = getLatestCachedRoadmap()
    writeUpdates(cachedRoadmap.roadmap, latestRoadmap.roadmap)
    console.log('Latest updates written')
  } else {
    console.log('No changes were made.')
  }
}

start()
