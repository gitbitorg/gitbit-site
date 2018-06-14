const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Planner',
  'tag': 'Planner',
  'description': 'Task Management',
  'icon': '/assets/icons/planner.png',
  'video': 'http://www.youtube.com/embed/p82hS0K32fA',
  'rating': '83%',
  'color': '31752f',
  'testimonials': [
    {
      'text': '"Office Planner is Microsoft’s entry into simplified, collaborative project management."'
    },
    {
      'text': '"Though smaller, standalone project management rivals have gained in popularity, Microsoft’s ability to bundle Planner with other Office apps give it a big foot in the enterprise door."'
    }
  ],
  'features': [
    {
      'name': 'Group Tasks',
      'description': 'Keep your team organized with all your tasks in one easy to access place.'
    },
    {
      'name': 'Visibility and Transparency',
      'description': 'Visualize your work and keep the whole team informed with a task list the team can see.'
    },
    {
      'name': 'Collaborate',
      'description': 'Share comments, files, and statuses right on tasks to keep everyone informed and moving forward.'
    }
  ],
  'licenses': [
    'Office 365 Business Premium',
    'Office 365 Business Essentials',
    'Office 365 Enterprise E1',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 Nonprofit Business Premium',
    'Office 365 Nonprofit Business Essentials'
  ],
  'platforms': {
    'web': 'https://tasks.office.com',
    'android': 'https://play.google.com/store/apps/details?id=com.microsoft.planner&hl=en_US',
    'iPhone': 'https://itunes.apple.com/us/app/microsoft-planner/id1219301037?mt=8'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://products.office.com/en-us/business/task-management-software'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/microsoftplanner'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=%26freeformsearch=Planner'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/article/planner-video-training-4d71390f-08d8-4db0-84ea-92fb078687c7?wt.mc_id=otc_home&ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'Getting Started Guide',
      'url': '/articles/Agile-Teamwork-with-Office-365-Planner'
    },
    {
      'title': 'UserVoice',
      'url': 'https://planner.uservoice.com/forums/330525-microsoft-planner-feedback-forum'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Microsoft_Planner'
    }
  ],
  'competitors': [
    {
      'name': 'Asana',
      'url': 'https://asana.com/',
      'image': '/assets/icons/asana.png'
    },
    {
      'name': 'Google Keep',
      'url': 'https://keep.google.com/',
      'image': '/assets/icons/google-keep.png'
    },
    {
      'name': 'Trello',
      'url': 'https://trello.com/',
      'image': '/assets/icons/trello.png'
    }
  ],
  'requests': [
    {
      'votes': 6100,
      'title': 'Integration with outlook tasks'
    },
    {
      'votes': 4700,
      'title': 'Provide the ability to create Plan templates with existing tasks that can then be used to create a new plan'
    },
    {
      'votes': 4400,
      'title': 'Gantt chart view'
    },
    {
      'votes': 4100,
      'title': 'Export to Excel'
    },
    {
      'votes': 4000,
      'title': 'Email Notifications and Alert Options'
    }
  ],
  'title': 'Planner',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/planner-1200x1200.jpg',
  'image1200x900': '/apps/assets/planner-1200x900.jpg',
  'image1200x675': '/apps/assets/planner-1200x675.jpg',
  'image400x300': '/apps/assets/planner-400x300.jpg',
  'canonical': '/apps/planner',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app