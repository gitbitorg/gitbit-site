const {join} = require('path')
const {Glob} = require('glob')
const fs = require('fs')
const cheerio = require('cheerio')
const Feed = require('feed')
const mime = require('mime-types')

const dest = join(__dirname, '..', '..', 'docs')

const getContent = (articlePath) => {
  const html = fs.readFileSync(join(dest, `${articlePath}.html`), 'utf8')
  const $ = cheerio.load(html)

  $('#article a').each((idx, el) => {
    if ($(el).attr('href').startsWith('/'))
      $(el).attr('href', `http://gitbit.org${$(el).attr('href')}`)
  })

  $('#article img').each((idx, el) => {
    if ($(el).attr('src').startsWith('/'))
      $(el).attr('src', `http://gitbit.org${$(el).attr('src')}`)
  })

  return $('#article').html()
}

const getArticles = () => {
  const articles = (Glob(join(__dirname, '..', '..', 'src', 'articles', '*.js'), {sync:true})).found
    .map((file) => require(file))
    .filter((article) => !article.redirect)
    .sort((a, b) => new Date(a.dateModified) < new Date(b.dateModified) ? 1 : -1)
    .map((article) => ({
      title: article.title,
      id: `http://gitbit.org${article.canonical}`,
      link: `http://gitbit.org${article.canonical}`,
      description: article.description,
      content: getContent(article.canonical),
      author: [{
        name: 'John Gruber',
        email: 'john.gruber@gitbit.org',
        link: 'http://gitbit.org/John-Gruber'
      }],
      date: new Date(article.datePublished),
      image: `http://gitbit.org${article.image1200x900}`
    }))

  return articles
}

const fixEnclosure = (rss) => {
  const getLocalPath = (url) => url.replace('http://gitbit.org', dest)

  const $ = cheerio.load(rss, {xmlMode: true})
  $('enclosure').each((idx, el) => {
    const path = getLocalPath($(el).attr('url'))
    const stats = fs.statSync(path)
    $(el).attr('length', stats.size)
    $(el).attr('type ', mime.lookup(path))
  })

  return $.html()
}

const createFeeds = () => {
  const feed = new Feed({
    title: 'Office 365 Tips to Improve Productivity - GitBit',
    description: 'Over 70% of Fortune 500 companies have migrated to Microsoft Office 365. Learn the latest tips to maximize your ROI.',
    id: 'http://gitbit.org/',
    link: 'http://gitbit.org/',
    image: 'http://gitbit.org/assets/gitbit/gitbit-icon-1200x1200.png',
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

  getArticles().forEach((article) => {
    feed.addItem(article)
  })

  feed.addCategory('Office 365')
  feed.addCategory('Technology')
  feed.addCategory('Microsoft')

  const rss = fixEnclosure(feed.rss2())

  fs.writeFileSync(join(dest, 'rss.xml'), rss)
  fs.writeFileSync(join(dest, 'atom.xml'), feed.atom1())
  fs.writeFileSync(join(dest, 'feed.json'), feed.json1())
}

module.exports = {createFeeds}
