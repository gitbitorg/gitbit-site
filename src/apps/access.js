const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Access',
  'tag': 'Access',
  'description': 'Database Management System (DBMS)',
  'icon': '/assets/icons/access.png',
  'video': 'http://www.youtube.com/embed/eXiCza050ug',
  'rating': '74%',
  'color': 'a4373a',
  'testimonials': [
    {
      'text': '"Microsoft Access is the industry leading desktop database creation tool for quick creation of relational SQL databases. It is an excellent tool for those not familiar with SQL - though add-ins, frameworks, templates & new Database Builder tools can help further simplify that, so truly don\'t need to learn SQL or VBA."'
    },
    {
      'text': '"It is an easy-to-use program compatible with the most popular databases in the world, therefore, it does not require expenses in training activities or the hiring of highly specialized personnel, saving money."'
    }
  ],
  'features': [
    {
      'name': 'Desktop Databases',
      'description': 'Create a highly customizable database that runs on a local machine without coding.'
    },
    {
      'name': 'Desktop Apps',
      'description': 'Use drag and drop to quickly create desktop apps that link to your data.'
    },
    {
      'name': 'App Templates',
      'description': 'Get started quickly by creating a custom application from a professionally-designed application template.'
    }
  ],
  'licenses': [
    'Office 365 Business',
    'Office 365 Business Premium',
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
      'url': 'https://products.office.com/en-us/access'
    },
    {
      'title': 'News',
      'url': 'https://www.microsoft.com/en-us/microsoft-365/blog/access/'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/MicrosoftAccess?src=hash'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=access'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/article/access-video-training-a5ffb1ef-4cc4-4d79-a862-e2dda6ef38e6?wt.mc_id=otc_home&ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'UserVoice',
      'url': 'https://access.uservoice.com/'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Microsoft_Access'
    }
  ],
  'competitors': [
    {
      'name': 'FileMaker',
      'url': 'http://www.filemaker.com/',
      'image': '/assets/icons/filemaker.png'
    },
    {
      'name': 'OpenOffice Base',
      'url': 'https://www.openoffice.org/product/base.html',
      'image': '/assets/icons/openoffice-base.png'
    },
    {
      'name': 'Tableau',
      'url': 'https://www.tableau.com/',
      'image': '/assets/icons/tableau.png'
    }
  ],
  'requests': [
    {
      'votes': 244,
      'title': 'Enhance the SQL Editor'
    },
    {
      'votes': 266,
      'title': 'Better integration with SQL Server'
    },
    {
      'votes': 177,
      'title': 'Automatically resize MS-Access Applications'
    },
    {
      'votes': 156,
      'title': 'Make Access a better ODBC client'
    },
    {
      'votes': 130,
      'title': 'Sync data between local/offline and cloud db tables'
    }
  ],
  'title': 'Microsoft Access',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/access-1200x1200.jpg',
  'image1200x900': '/apps/assets/access-1200x900.jpg',
  'image1200x675': '/apps/assets/access-1200x675.jpg',
  'image400x300': '/apps/assets/access-400x300.jpg',
  'canonical': '/apps/access',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app