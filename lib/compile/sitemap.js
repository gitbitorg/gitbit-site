const fs = require('fs')
const {join} = require('path')
const sm = require('sitemap')
const {Glob} = require('glob')

const dest = join(__dirname, '..', '..', 'dest')

const createSitemap = () => {
  const urls = Glob(join(dest, '**/*.html'), {sync:true}).found
    .map((webpagePath) => {
      return {
        url: webpagePath.replace(dest, ''),
        changefreq: 'weekly',
        priority: 0.8,
      }
    })

  const sitemap = sm.createSitemap({
    hostname: 'http://gitbit.org',
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls
  })

  const sitemapPath = join(dest, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap.toString())
}
createSitemap()
module.exports = {createSitemap}
