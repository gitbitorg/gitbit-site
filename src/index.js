const Glob = require('glob').Glob
const {found} = Glob(`${__dirname}\\articles\\*.js`, {sync:true})

const articles = found
  .map((file) => require(file))
  .filter((article) => !article.redirect)
  .sort((a, b) => new Date(a.dateModified) < new Date(b.dateModified) ? 1 : -1)

module.exports = {
  template: 'index.pug',
  canonical: '/',
  title: 'Office 365 Tips to Improve Productivity | GitBit',
  description: 'Over 70% of Fortune 500 companies have migrated to Microsoft Office 365. Learn the latest tips to maximize your ROI.',
  datePublished: '2018-01-20T00:00:00.000Z',
  dateModified: '2018-06-14T00:00:00.000Z',
  image1200x1200: '/assets/gitbit/gitbit-icon-1200x1200.png',
  image1200x900: '/assets/gitbit/gitbit-logo-1200x900.png',
  image1200x675: '/assets/gitbit/gitbit-logo-1200x675.png',
  image400x300: '/assets/gitbit/gitbit-logo-400x300.png',
  articles
}
