const fs = require('fs')
const {join} = require('path')
const sm = require('sitemap')
const {Glob} = require('glob')
const cheerio = require('cheerio')

const dest = join(__dirname, '..', '..', 'dest')

const getImages = (html) => {
  const $ = cheerio.load(html)
  const imgs = []

  $('img').each((idx, el) => {
    const i = {
      url: `http://gitbit.org${$(el).attr('src')}`,
      license: 'https://creativecommons.org/licenses/by/4.0/'
    }

    if ($(el).attr('alt')) i.title = $(el).attr('alt')
    imgs.push(i)
  })

  return imgs
}

const getPageMeta = (path) => {
  const html = fs.readFileSync(path, 'utf8')
  const $ = cheerio.load(html)
  const jsonLd = JSON.parse($('script[type="application/ld+json"]').html())

  const meta = {
    url: $('link[rel="canonical"]').attr('ref'),
    changefreq: 'weekly',
    priority: 0.8,
    lastmodISO: jsonLd.dateModified,
    img: getImages(html)
  }

  return meta
}

const createSitemap = () => {
  const urls = Glob(join(dest, '**/*.html'), {sync:true}).found
    .map((webpagePath) => {
      return getPageMeta(webpagePath)
    })

  const sitemap = sm.createSitemap({
    hostname: 'http://gitbit.org',
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls
  })

  const sitemapPath = join(dest, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap.toString())
}

module.exports = {createSitemap}
