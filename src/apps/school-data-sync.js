const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'School Data Sync',
  'description': 'SIS to Office 365',
  'icon': '/assets/icons/school-data-sync.png',
  'video': 'http://www.youtube.com/embed/yPzCJ4eqWfM',
  'rating': '??',
  'color': '5b2d90',
  'testimonials': [
    {
      'text': '"It mirrors user data from Student information System (SIS) into Office 365 and Azure Active directory, enabling single sign-on and making it easier to deliver more customized experiences. Let us check how"'
    },
    {
      'text': '"The class is already populated with students. The teacher didn’t have to do anything, thanks to the automation process of School Data Sync."'
    }
  ],
  'features': [
    {
      'name': 'Sync Rosters from SIS',
      'description': 'Automatically sync rosters from SIS and create classes in Microsoft Teams.'
    },
    {
      'name': 'Single-Sign-On',
      'description': 'Sync account information to Office 365 to create a simple single sign on experience.'
    }
  ],
  'licenses': [
    'Office 365 A1',
    'Office 365 A3',
    'Office 365 A5'
  ],
  'platforms': {
    'web': 'https://sds.microsoft.com/',
    'pc': 'https://docs.microsoft.com/en-us/schooldatasync/install-the-school-data-sync-toolkit'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://sds.microsoft.com/'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/schooldatasync'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=education'
    },
    {
      'title': 'Getting Started',
      'url': 'https://docs.microsoft.com/en-us/schooldatasync/overview-of-school-data-sync'
    },
    {
      'title': 'YouTube',
      'url': 'https://www.youtube.com/channel/UCA8ZOC7eTfzLlkcFW3imkHg'
    },
    {
      'title': 'YouTube: MS Education',
      'url': 'https://www.youtube.com/user/Microsoftedu'
    },
    {
      'title': 'UserVoice',
      'url': 'https://edu.uservoice.com/forums/602512-school-data-sync/filters/top'
    }
  ],
  'competitors': [
    {
      'name': 'G Suite',
      'url': 'https://gsuite.google.com/',
      'image': '/assets/icons/G-Suite.png'
    }
  ],
  'requests': [
    {
      'votes': 5,
      'title': 'Parent Data in SDS'
    },
    {
      'votes': 4,
      'title': 'Changelog for SDS Toolkit'
    },
    {
      'votes': 3,
      'title': 'Select what Powerschool Fields to sync with Azure'
    },
    {
      'votes': 1,
      'title': 'Events to publish changes to the school roaster via rest api.'
    }
  ],
  'title': 'School Data Sync',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/school-data-sync-1200x1200.jpg',
  'image1200x900': '/apps/assets/school-data-sync-1200x900.jpg',
  'image1200x675': '/apps/assets/school-data-sync-1200x675.jpg',
  'image400x300': '/apps/assets/school-data-sync-400x300.jpg',
  'canonical': '/apps/school-data-sync',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app