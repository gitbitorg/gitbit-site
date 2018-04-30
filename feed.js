const Glob = require('glob').Glob
const Feed = require('feed')
const fs = require('fs')
const pug = require('pug')
const wordCount = require('html-word-count')
const cheerio = require('cheerio')

/*
link(rel='alternate', type='application/rss+xml', title='RSS Feed for gitbit.org', href='http://gitbit.org/rss.xml')
link(rel='alternate', type='application/atom+xml', title='Atom Feed for gitbit.org', href='http://gitbit.org/atom.xml')
link(rel='alternate', title='JSON Feed for GitBit.org', type='application/json', href='https://gitbit.org/feed.json')

*/
const metaPaths = (Glob('views/pages/articles/**/*.js', {sync:true})).found

const feed = new Feed({
  title: 'Office 365 Tips to Improve Productivity - GitBit',
  description: 'Over 70% of Fortune 500 companies have migrated to Microsoft Office 365. Learn the latest tips to maximize your ROI.',
  id: 'http://gitbit.org/',
  link: 'http://gitbit.org/',
  image: 'http://gitbit.org/assets/branding/GitBit-Logo-88x88.png',
  favicon: 'http://gitbit.org/assets/favicons/favicon.ico',
  copyright: 'All rights reserved 2018, John L. Gruber',
  feedLinks: {
    rss: 'http://gitbit.org/rss.xml',
    json: 'http://gitbit.org/feed.json',
    atom: 'http://gitbit.org/atom.xml',
  },
  author: {
    name: 'John Gruber',
    email: 'john.gruber@gitbit.rog',
    link: 'http://gitbit.org/John-Gruber'
  }
})

const getContent = (metaPath, meta) => {
  const articlePath = metaPath.replace('.js', '.pug')
  let html = pug.renderFile(articlePath, meta)
  html = pug.renderFile(articlePath, Object.assign({wordCount: wordCount(html)}, meta))
  const $ = cheerio.load(html)

  return $('article').html()
}

metaPaths.forEach(metaPath => {
  const meta = require(`./${metaPath}`)

  feed.addItem({
    title: meta.title,
    id: `http://gitbit.org/${meta.canonical}`,
    link: `http://gitbit.org/${meta.canonical}`,
    description: meta.description,
    content: getContent(metaPath, meta),
    author: [{
      name: 'John Gruber',
      email: 'john.gruber@gitbit.org',
      link: 'http://gitbit.org/John-Gruber'
    }],
    date: new Date(meta.dateModified),
    image: meta.image1200x900
  })
})

feed.addCategory('Office 365')

fs.writeFileSync('./docs/rss.xml', feed.rss2())
fs.writeFileSync('./docs/atom.xml', feed.atom1())
fs.writeFileSync('./docs/feed.json', feed.json1())
