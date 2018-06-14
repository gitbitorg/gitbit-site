const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Yammer',
  'tag': 'Yammer',
  'description': 'Enterprise Social Media',
  'icon': '/assets/icons/yammer.png',
  'video': 'http://www.youtube.com/embed/MMEoWMJf1uY',
  'rating': '88%',
  'color': '0072c6',
  'testimonials': [
    {
      'text': '"Great for keeping in touch with whats happening in my workplace."'
    },
    {
      'text': '"Awesome social app to connect with work people nationwide."'
    }
  ],
  'features': [
    {
      'name': 'Enterprise Social Media',
      'description': 'Share and collaborate using a social media style tool that\'s fast and secure.'
    },
    {
      'name': 'Up-To-Date',
      'description': 'Stay up-to-date on all the latest announcements across the entire organization.'
    },
    {
      'name': 'Communicate',
      'description': 'Yammer gives a platform to the organization so CEOs to team leads can communicate with everyone in a fast, safe environment.'
    }
  ],
  'licenses': [
    'Office 365 Enterprise E1',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 F1'
  ],
  'platforms': {
    'web': 'https://www.yammer.com/office365',
    'android': 'https://play.google.com/store/apps/details?id=com.yammer.v1&hl=en_US',
    'iPhone': 'https://itunes.apple.com/us/app/yammer/id289559439?mt=8'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://www.yammer.com/'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/yammer'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=yammer'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/article/yammer-video-training-2c0ce4c6-0a99-466f-bf1b-cbe7ffa9779a?wt.mc_id=otc_home&ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'YouTube',
      'url': 'https://www.youtube.com/user/YammerInc'
    },
    {
      'title': 'UserVoice',
      'url': 'https://yammer.uservoice.com/forums/399627-yammer/filters/top'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Yammer'
    }
  ],
  'competitors': [
    {
      'name': 'Microsoft Teams',
      'url': '/apps/microsoft-teams',
      'image': '/assets/icons/microsoft-teams-96px.png'
    },
    {
      'name': 'Skype',
      'url': '/apps/skype',
      'image': '/assets/icons/skype-96px.png'
    },
    {
      'name': 'Google Hangouts',
      'url': 'https://hangouts.google.com/',
      'image': '/assets/icons/google-hangouts.png'
    }
  ],
  'requests': [
    {
      'votes': 560,
      'title': 'Allow users to change order of Groups'
    },
    {
      'votes': 480,
      'title': 'Support rich text formatting in Yammer posts'
    },
    {
      'votes': 380,
      'title': 'Be able to pin messages to the top of groups'
    },
    {
      'votes': 310,
      'title': 'Post a thread to multiple groups'
    },
    {
      'votes': 310,
      'title': 'Allow us to customize the name/avatar for the "All Company" group'
    }
  ],
  'title': 'Yammer',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/yammer-1200x1200.jpg',
  'image1200x900': '/apps/assets/yammer-1200x900.jpg',
  'image1200x675': '/apps/assets/yammer-1200x675.jpg',
  'image400x300': '/apps/assets/yammer-400x300.jpg',
  'canonical': '/apps/yammer',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app