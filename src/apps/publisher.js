const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Publisher',
  'description': 'Publishing Software',
  'icon': '/assets/icons/publisher.png',
  'rating': '85%',
  'color': '087366',
  'testimonials': [
    {
      'text': '"The best thing about the program is its simple interface."'
    },
    {
      'text': '"Publisher is a program that has a simple interface that makes it easy to use, inclusive for people who have no knowledge of the subject in graphic design, is created for the preparation of calendars, brochures, diplomas, newsletters, resumes, signs, information sheets, letterheads, envelopes, business forms, invitations, catalogs, flyers, calendars and announcements in general."'
    }
  ],
  'features': [
    {
      'name': 'Printouts',
      'description': 'Create visually stunning printouts with built-in styles and easy image effects.'
    },
    {
      'name': 'Emails',
      'description': 'Create marketing emails with images, videos, and styled text.'
    }
  ],
  'licenses': [
    'Office 365 ProPlus',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 A3',
    'Office 365 A5',
    'Office 365 G3',
    'Office 365 G5',
    'Office 365 Nonprofit Business Premium'
  ],
  'platforms': {
    'pc': 'https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658',
    'mac': 'https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://products.office.com/en-us/publisher'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/microsoftpublisher'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/publisher'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Microsoft_Publisher'
    }
  ],
  'competitors': [
    {
      'name': 'LibreOffice Draw',
      'url': 'https://www.libreoffice.org/discover/draw/',
      'image': '/assets/icons/libreoffice-draw.png'
    },
    {
      'name': 'Scribus',
      'url': 'https://www.scribus.net/',
      'image': '/assets/icons/scribus.png'
    }
  ],
  'title': 'Publisher',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/publisher-1200x1200.jpg',
  'image1200x900': '/apps/assets/publisher-1200x900.jpg',
  'image1200x675': '/apps/assets/publisher-1200x675.jpg',
  'image400x300': '/apps/assets/publisher-400x300.jpg',
  'canonical': '/apps/publisher',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app