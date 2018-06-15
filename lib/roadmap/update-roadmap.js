const util = require('util')
const fs = require('fs')
const {resolve} = require('path')
const request = util.promisify(require('request'))
const cacheFile = resolve(__dirname, 'cache.json')

const deleteCache = () => new Promise((res, rej) => {
  fs.access(cacheFile, fs.constants.F_OK, (err) => {
    if (err) res()

    fs.unlink(cacheFile, (err) => {
      if (err) rej(err)
      res()
    })
  })
})

const createCache = (data) => new Promise((res, rej) => {
  fs.writeFile(cacheFile, data, 'utf8', (err) => {
    if (err) rej(err)
    res()
  })
})

const updateRoadmap = async () => {
  let res

  try {
    res = await request('https://roadmap-api.azurewebsites.net/api/features')
  } catch (e) {
    console.log('Error getting Office 365 roadmap')
  }

  if (res) {
    await deleteCache()
    await createCache(res.body)
  }
}

module.exports = {updateRoadmap}
