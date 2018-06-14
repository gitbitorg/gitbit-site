const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Office Lens',
  'tag': 'Office Lens',
  'description': 'Camera for Scanning',
  'icon': '/assets/icons/office-lens.png',
  'video': 'http://www.youtube.com/embed/jzZ3WVhgi5w',
  'rating': '94%',
  'color': 'da3b01',
  'testimonials': [
    {
      'text': '"Everything works well enough for daily uses. I use it to scan and store most paper notes, receipts, documents, magazine clips."'
    },
    {
      'text': '"Most of the times the app detects the boundaries of the document and automatically crops the scanned image to remove unwanted background."'
    }
  ],
  'features': [
    {
      'name': 'Enhanced Readability',
      'description': 'Office Lens trims, enhances, and makes pictures of whiteboards and docs readable removing backgrounds, and white noise.'
    },
    {
      'name': 'Conversion',
      'description': 'Convert scanned images to PDF, Word and PowerPoint files.'
    },
    {
      'name': 'Upload',
      'description': 'Easily upload your scanned documents and images to Office 365 OneDrive for storage, and sharing.'
    }
  ],
  'licenses': [
    'Office 365 Business',
    'Office 365 Business Premium',
    'Office 365 Business Essentials',
    'Office 365 ProPlus',
    'Office 365 Enterprise E1',
    'Office 365 Enterprise E3',
    'Office 365 Enterprise E5',
    'Office 365 A1',
    'Office 365 A3',
    'Office 365 A5',
    'Office 365 F1',
    'Office 365 G1',
    'Office 365 G3',
    'Office 365 G5',
    'Office 365 Nonprofit Business Premium',
    'Office 365 Nonprofit Business Essentials'
  ],
  'platforms': {
    'pc': 'https://www.microsoft.com/en-us/p/office-lens/9wzdncrfj3t8',
    'android': 'https://play.google.com/store/apps/details?id=com.microsoft.office.officelens&hl=en_US',
    'iPhone': 'https://itunes.apple.com/us/app/office-lens/id975925059?mt=8'
  },
  'resources': [
    {
      'title': 'More Information',
      'url': 'https://support.office.com/en-ie/article/what-is-office-lens-f5f6b88d-356f-4037-b7e8-49f34be86db3'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/'
    },
    {
      'title': 'Windows Training',
      'url': 'https://support.office.com/en-us/article/office-lens-for-windows-577ec09d-8da2-4029-8bb7-12f8114f472a'
    },
    {
      'title': 'Android Training',
      'url': 'https://support.office.com/en-gb/article/office-lens-for-android-ec124207-0049-4201-afaf-b5874a8e6f2b'
    },
    {
      'title': 'iOS Training',
      'url': 'https://support.office.com/en-us/article/office-lens-for-ios-fbdca5f4-1b1b-4391-a931-dc1c2582397b'
    },
    {
      'title': 'YouTube',
      'url': 'https://www.youtube.com/'
    },
    {
      'title': 'UserVoice',
      'url': 'https://.uservoice.com'
    },
    {
      'title': 'Wikipedia',
      'url': 'https://en.wikipedia.org/wiki/Microsoft_mobile_services#Office_Lens'
    }
  ],
  'competitors': [
    {
      'name': 'CamScanner',
      'url': 'https://www.camscanner.com/',
      'image': '/assets/icons/camscanner.png'
    },
    {
      'name': 'Adobe Scan',
      'url': 'https://acrobat.adobe.com/us/en/acrobat/mobile-app/scan-documents.html',
      'image': '/assets/icons/adobe-scan.png'
    }
  ],
  'requests': [
    {
      'votes': 10000,
      'title': 'Scan mulitiple photos into the same document for Windows'
    },
    {
      'votes': 4700,
      'title': 'Save to specified OneDrive folder with file rename'
    },
    {
      'votes': 2300,
      'title': 'Email as PDF'
    },
    {
      'votes': 2000,
      'title': 'Scan to other cloud services besides OneDrive'
    },
    {
      'votes': 1500,
      'title': 'Scan to existing OneNote page instead of creating new page'
    }
  ],
  'title': 'Office Lens',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/exchange-online-1200x1200.jpg',
  'image1200x900': '/apps/assets/exchange-online-1200x900.jpg',
  'image1200x675': '/apps/assets/exchange-online-1200x675.jpg',
  'image400x300': '/apps/assets/exchange-online-400x300.jpg',
  'canonical': '/apps/office-lens',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app