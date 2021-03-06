const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'StaffHub',
  'tag': 'StaffHub',
  'description': 'Staff Management',
  'icon': '/assets/icons/staffhub.png',
  'video': 'http://www.youtube.com/embed/e8ZE-IsgFow',
  'rating': '92%',
  'color': '0d8387',
  'testimonials': [
    {
      'text': '"I like that "shift members can take care of their own shift swaps, but that managers can still approve or deny them, without anyone needing to be near the other."'
    },
    {
      'text': '"Can track hours and time off, easily, replacing our previous schedule management system and time clock."'
    }
  ],
  'features': [
    {
      'name': 'Schedule Management',
      'description': 'Schedule employees, change shifts, and manage the schedule on the go.'
    },
    {
      'name': 'Streamline Onboarding',
      'description': 'Deliver employee resources and training content that workers need to gain the skills and confidence they need to do their best work.'
    },
    {
      'name': 'Collaborate',
      'description': 'Create spaces for meaningful conversation where workers can share ideas, learn from one another, and gain insight into larger, organizational initiatives.'
    }
  ],
  'licenses': [
    'Office 365 Business Premium',
    'Office 365 Enterprise E1',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 A1',
    'Office 365 A3',
    'Office 365 A5',
    'Office 365 F1'
  ],
  'platforms': {
    'web': 'https://staffhub.office.com',
    'android': 'https://play.google.com/store/apps/details?id=ols.microsoft.com.shiftr&hl=en_US',
    'iPhone': 'https://itunes.apple.com/us/app/microsoft-staffhub/id1122181468?mt=8'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://products.office.com/en-us/microsoft-staffhub/staff-scheduling-software'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/staffhub'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=%26freeformsearch=staffhub'
    },
    {
      'title': 'Training',
      'url': 'https://support.office.com/en-us/article/getting-started-with-microsoft-staffhub-92e9480f-0a37-47d2-ac96-2d11ee5f0656'
    },
    {
      'title': 'UserVoice',
      'url': 'https://staffhub.uservoice.com/forums/323718-general/filters/top'
    }
  ],
  'competitors': [
    {
      'name': 'Timely',
      'url': 'https://timelyapp.com/',
      'image': '/assets/icons/timely.png'
    },
    {
      'name': 'Deputy',
      'url': 'https://www.deputy.com/us/',
      'image': '/assets/icons/deputy.png'
    }
  ],
  'requests': [
    {
      'votes': 640,
      'title': 'Offer the Mobile functionality in a browser'
    },
    {
      'votes': 560,
      'title': 'Mark company holidays (per location) on schedule'
    },
    {
      'votes': 530,
      'title': 'O365 additional group functionality - files, chat & calendar'
    },
    {
      'votes': 451,
      'title': 'Connect StaffHub to Outlook calendar of team members for availability'
    },
    {
      'votes': 340,
      'title': 'Create re-usable shifts that are saved for weekly scheduling and assign a color'
    }
  ],
  'title': 'StaffHub',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/staffhub-1200x1200.jpg',
  'image1200x900': '/apps/assets/staffhub-1200x900.jpg',
  'image1200x675': '/apps/assets/staffhub-1200x675.jpg',
  'image400x300': '/apps/assets/staffhub-400x300.jpg',
  'canonical': '/apps/staffhub',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app