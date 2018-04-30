const {resolve, normalize} = require('path')
const sharp = require('sharp')
const Glob = require('glob').Glob

const draftsFolderPath = resolve(__dirname, '..', 'drafts')
const assetsFolderPath = resolve(__dirname, '../docs/assets/article', process.env.assetsFolder)

const images = Glob(resolve(draftsFolderPath, '*.+(png|jpg|jpeg)'), {sync:true}).found
images.forEach((source) => {
  source = normalize(source)
  const destination = source.replace(draftsFolderPath, assetsFolderPath)
  sharp(source).toFile(destination)
})
