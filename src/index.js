const Glob = require('glob').Glob
const {found} = Glob(`${__dirname}\\articles\\*.js`, {sync:true})

const articles = found.map((file) => require(file)).sort((a, b) => new Date(a.dateModified) < new Date(b.dateModified) ? 1 : -1)
module.exports = {
  template: 'index.pug',
  canonical: '/',
  articles
}
