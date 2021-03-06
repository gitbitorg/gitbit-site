const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Excel',
  'tag': 'Excel',
  'description': 'Spreadsheet',
  'icon': '/assets/icons/excel.png',
  'rating': '92%',
  'color': '217346',
  'testimonials': [
    {
      'text': '"Excel is the best spreadsheet software available, and in my opinion is the most important software for any company."'
    },
    {
      'text': '"One of the most powerful office oriented software packages ever developed"'
    }
  ],
  'features': [
    {
      'name': 'Data Management',
      'description': 'Organize data into spreadsheets that can be quickly sorted, filtered, and analyzed.'
    },
    {
      'name': 'Data Visualization',
      'description': 'Visualize data to help turn raw information into powerful action items.'
    },
    {
      'name': 'Collaboration',
      'description': 'Work in real-time on the same spreadsheets anywhere in the world.'
    }
  ],
  'licenses': [
    'Office 365 Business',
    'Office 365 Business Premium',
    'Office 365 ProPlus',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 A1',
    'Office 365 A3',
    'Office 365 A5',
    'Office 365 G3',
    'Office 365 G5',
    'Office 365 Nonprofit Business Premium'
  ],
  'platforms': {
    'web': 'https://www.office.com/launch/Excel',
    'pc': 'https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658',
    'mac': 'https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658',
    'android': 'https://play.google.com/store/apps/details?id=com.microsoft.office.excel&hl=en_US',
    'iPhone': 'https://itunes.apple.com/us/app/microsoft-excel/id586683407?mt=8'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://products.office.com/en-us/excel'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/MicrosoftExcel'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=excel'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/article/excel-for-windows-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb?wt.mc_id=otc_home&ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'UserVoice',
      'url': 'https://excel.uservoice.com/'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Microsoft_Excel'
    }
  ],
  'competitors': [
    {
      'name': 'Google Sheets',
      'url': 'https://www.google.com/sheets/about/',
      'image': '/assets/icons/google-sheets.png'
    },
    {
      'name': 'LibreOffice Calc',
      'url': 'https://www.libreoffice.org/discover/calc/',
      'image': '/assets/icons/libreoffice-calc.png'
    }
  ],
  'requests': [
    {
      'votes': 5000,
      'title': 'Python as an Excel scripting language'
    },
    {
      'votes': 1600,
      'title': 'Power Query - cache shared nodes'
    },
    {
      'votes': 1300,
      'title': 'Stop Excel from changing large "numbers" (actually text values) to scientific notation.'
    },
    {
      'votes': 1200,
      'title': 'Have Excel scroll better when there are large cells.'
    },
    {
      'votes': 1100,
      'title': 'Maintain leading zeroes when entering values in cells'
    }
  ],
  'title': 'Microsoft Excel',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/excel-1200x1200.jpg',
  'image1200x900': '/apps/assets/excel-1200x900.jpg',
  'image1200x675': '/apps/assets/excel-1200x675.jpg',
  'image400x300': '/apps/assets/excel-400x300.jpg',
  'canonical': '/apps/excel',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app