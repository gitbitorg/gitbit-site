const Glob = require('glob').Glob
const Feed = require('feed')
const fs = require('fs')
const pug = require('pug')
const wordCount = require('html-word-count')
const cheerio = require('cheerio')
const mime = require('mime-types')

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

  $('article a').each((idx, el) => {
    if ($(el).attr('href').startsWith('/'))
      $(el).attr('href', `http://gitbit.org${$(el).attr('href')}`)
  })

  $('article img').each((idx, el) => {
    if ($(el).attr('src').startsWith('/'))
      $(el).attr('src', `http://gitbit.org${$(el).attr('src')}`)
  })

  $('*')
    .not('html').not('meta').not('body').not('link').not('title').not('style').not('noscript').not('head')
    .not('p').not('a').not('img').not('strong').not('li').not('ul').not('ol').not('br').not('div').not('em')
    .not('h1').not('h2').not('h3').not('h4').not('h5').not('h6')
    .not('footer').not('header').not('article').not('main')
    .each((idx, el) => {
      $(el).remove()
    })

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

const fixEnclosure = (rss) => {
  const getLocalPath = (url) => url.replace('http://gitbit.org', './docs')

  const $ = cheerio.load(rss, {xmlMode: true})
  $('enclosure').each((idx, el) => {
    const path = getLocalPath($(el).attr('url'))
    const stats = fs.statSync(path)
    $(el).attr('length', stats.size)
    $(el).attr('type ', mime.lookup(path))
  })

  return $.html()
}

const rss = fixEnclosure(feed.rss2())

fs.writeFileSync('./docs/rss.xml', rss)
fs.writeFileSync('./docs/atom.xml', feed.atom1())
fs.writeFileSync('./docs/feed.json', feed.json1())
