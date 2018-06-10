const Glob = require('glob').Glob

const apps = (Glob(__dirname + '/!(index).js', {sync:true})).found.map(path => require(path))

module.exports = {
  apps,
  'title': 'Office 365 Apps',
  'description': 'View all the apps bundled into Office 365. Learn about each app and their licensing requirements.',
  'keywords': 'Office 365, apps, webpps',
  'assetsFolder': 'apps',
  'fileName': 'apps',
  'datePublished': '2018-06-09T00:00:00.000Z',
  'dateModified': '2018-06-09T00:00:00.000Z',
  'canonical': '/apps',
  'image1200x1200': 'http://gitbit.org/assets/apps/apps-1200x1200.jpg',
  'image1200x900': 'http://gitbit.org/assets/apps/apps-1200x900.jpg',
  'image1200x675': 'http://gitbit.org/assets/apps/apps-1200x675.jpg',
  'image400x300': 'http://gitbit.org/assets/apps/apps-400x300.jpg',
}
