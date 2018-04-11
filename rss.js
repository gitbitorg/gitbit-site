const fs = require('fs')
const RSS = require('rss')
const articles = require('./views/articles.js')

const feed = new RSS({
  title: 'Office 365 Tips to Improve Productivity - GitBit',
  description: 'Over 70% of Fortune 500 companies have migrated to Microsoft Office 365. Learn the latest tips to maximize your ROI.',
  feed_url: 'http://gitbit.org/rss.xml',
  site_url: 'http://gitbit.org',
  image_url: 'http://gitbit.org/assets/branding/GitBit-Logo-88x88.png',
  managingEditor: 'john.gruber@gitbit.org (John Gruber)',
  webMaster: 'john.gruber@gitbit.org (John Gruber)',
  copyright: '2018 GitBit',
  language: 'en',
  categories: ['Office 365','Microsoft','Enterprise Cloud'],
  pubDate: new Date(),
  ttl: '60'
})

articles.forEach((article) => {
  feed.item(Object.assign({
    author: 'john.gruber@gitbit.org (John Gruber)',
    categories: ['Microsoft', 'Office 365']
  }, article))
})

const xml = feed.xml({indent: true})
fs.writeFileSync('./docs/feed.xml', xml)
