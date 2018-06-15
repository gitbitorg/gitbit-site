const {join} = require('path')
const fs = require('fs')
const ampify = require('ampify')
const {Glob} = require('glob')

const dest = join(__dirname, '..', '..', 'dest')

const getDestination = (srcPath) => {
  const destPath = srcPath.slice(0, dest.length) + '/amp' + srcPath.slice(dest.length)
  return destPath
}

const createAmpPage = (srcPath) => {
  const html = fs.readFileSync(srcPath, 'utf8')
  const amp = ampify(html, {cwd:dest})
  const destPath = getDestination(srcPath)
  fs.writeFileSync(destPath, amp)
}

const ampPages = () => {
  Glob(join(dest, '**/*.html'), {sync:true}).found
    .forEach((srcPath) => {
      createAmpPage(srcPath)
    })
}

module.exports = {ampPages}
