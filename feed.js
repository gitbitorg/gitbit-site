const Glob = require('glob').Glob
const Feed = require('feed')
const fs = require('fs')
const pug = require('pug')
const htmlparser = require('htmlparser2')
const wordCount = require('html-word-count')

/*
link(rel='alternate', type='application/rss+xml', title='RSS Feed for petefreitag.com', href='http://gitbit.org/rss.xml')
link(rel='alternate', type='application/atom+xml', title='Atom Feed for petefreitag.com', href='http://gitbit.org/rss.xml')
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
  let content = ''
  let isArticle = false
  const parser = new htmlparser.Parser({
    onopentag: (name) => {
      if(name === 'article') {
        isArticle = true
      }
    },
    ontext: (txt) => {
      if (isArticle) content = txt
    }
  }, {decodeEntities: true})

  parser.write(html)
  parser.end()
  console.log(content)
}

metaPaths.forEach(metaPath => {
  const meta = require(`./${metaPath}`)
  const content = getContent(metaPath, meta)

  feed.addItem({
    title: meta.title,
    id: `http://gitbit.org/${meta.canonical}`,
    link: `http://gitbit.org/${meta.canonical}`,
    description: meta.description,
    content: content,
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

fs.writeFileSync('./feed.xml', feed.rss2())

// feed.atom1()
// feed.json1()
