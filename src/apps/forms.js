const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Microsoft Forms',
  'tag': 'Microsoft Forms',
  'description': 'Survey Software',
  'icon': '/assets/icons/forms.png',
  'rating': '',
  'color': '008272',
  'testimonials': [
    {
      'text': '"You don\'t need web design or developer skills to solicit a bit of information using online forms."'
    },
    {
      'text': '"Creating a quick form is easy using Microsoft Forms."'
    }
  ],
  'features': [
    {
      'name': 'Simple Online Forms',
      'description': 'Create simple easy to user surveys, quizzes, and polls.'
    },
    {
      'name': 'Web Based',
      'description': 'Every form is shared and published through Microsoft directly to the web. Simply create a form and share a link.'
    },
    {
      'name': 'Document Upload',
      'description': 'Create forms where customers, and employees can upload and store documents in Office 365.'
    }
  ],
  'licenses': [
    'Office 365 Business Premium',
    'Office 365 Business Essentials',
    'Office 365 Enterprise E1',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 A1',
    'Office 365 A3',
    'Office 365 A5',
    'Office 365 F1'
  ],
  'platforms': {
    'web': 'https://forms.office.com/'
  },
  'resources': [
    {
      'title': 'Create a form with Microsoft Forms',
      'url': 'https://support.office.com/en-us/article/create-a-form-with-microsoft-forms-4ffb64cc-7d5d-402f-b82e-b1d49418fd9d'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/MicrosoftForms'
    },
    {
      'title': 'FAQ',
      'url': 'https://support.office.com/en-us/article/frequently-asked-questions-about-microsoft-forms-495c4242-6102-40a0-add8-df05ed6af61c'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/forms'
    },
    {
      'title': 'UserVoice',
      'url': 'https://microsoftforms.uservoice.com/forums/386451-welcome-to-microsoft-forms-suggestion-box/filters/top'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Microsoft_Forms'
    }
  ],
  'competitors': [
    {
      'name': 'Google Forms',
      'url': 'https://www.google.com/forms/about/',
      'image': '/assets/icons/google-forms.png'
    }
  ],
  'requests': [
    {
      'votes': 1500,
      'title': 'add upload attachment for uploading a document, image, etc...'
    },
    {
      'votes': 1300,
      'title': 'Add ability to insert sections, titles and instructional text'
    },
    {
      'votes': 850,
      'title': 'Checkboxes, email alerts, forms to tasks'
    },
    {
      'votes': 740,
      'title': 'Connect results to Excel as a data source rather than opening a new workbook each time'
    },
    {
      'votes': 700,
      'title': 'Transfer of ownership'
    }
  ],
  'title': 'Microsoft Forms',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/forms-1200x1200.jpg',
  'image1200x900': '/apps/assets/forms-1200x900.jpg',
  'image1200x675': '/apps/assets/forms-1200x675.jpg',
  'image400x300': '/apps/assets/forms-400x300.jpg',
  'canonical': '/apps/forms',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app