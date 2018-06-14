const redirect = require('./people/john-gruber.js')

module.exports = {
  'title': redirect.title,
  'description': redirect.description,
  'datePublished': '2018-04-28T02:56:00.998Z',
  'dateModified': '2018-04-28T02:56:00.999Z',
  'canonical': '/John-Gruber',
  'image1200x1200': redirect.image1200x1200,
  'image1200x900': redirect.image1200x900,
  'image1200x675': redirect.image1200x675,
  'image400x300': redirect.image400x300,
  'template': '/redirect.pug',
  redirect: redirect.canonical
}
