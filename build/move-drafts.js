const fs = require('fs')
const {resolve, normalize} = require('path')
const Glob = require('glob').Glob
const {execSync} = require('child_process')

const moveDrafts = (assetsFolder) => {
  const draftsPath = resolve(__dirname, '..', 'drafts')
  const compressDraftImagesPath = resolve(__dirname, 'compress-draft-images.js')
  const assetsFolderPath = resolve(__dirname, '../docs/assets/article', assetsFolder)

  execSync(`node ${compressDraftImagesPath}`, { stdio: 'inherit', env: {assetsFolder} })

  const images = Glob(resolve(draftsPath, '*.+(png|jpg|jpeg)'), {sync:true}).found
  images.forEach((source) => {
    fs.unlinkSync(normalize(source))
  })

  const files = Glob(resolve(draftsPath, '*.!(png|jpg|jpeg)'), {sync:true}).found
  files.forEach((source) => {
    source = normalize(source)
    const destination = source.replace(draftsPath, assetsFolderPath)
    fs.renameSync(source, destination)
  })
}

module.exports = {moveDrafts}
