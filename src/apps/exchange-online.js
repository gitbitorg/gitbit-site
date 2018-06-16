const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Exchange Online',
  'tag': 'Exchange',
  'description': 'Hosted Email for Business',
  'icon': '/assets/icons/exchange-online.png',
  'video': 'http://www.youtube.com/embed/sZsh7SH0dM4',
  'rating': '94%',
  'color': '2471ba',
  'testimonials': [
    {
      'text': '"Reliability problems have all but gone away. I have had no performance or functionality problems."'
    },
    {
      'text': '"It is easy to administer, create accounts, configure email connections, the connection via web http and activate sync by tablet and cell phones is an excellent tool, and easy to set them."'
    }
  ],
  'features': [
    {
      'name': 'Security and Reliability',
      'description': 'Anti-malware and anti-spam filtering for all email. Globally redundant servers with a 99.9% up-time SLA.'
    },
    {
      'name': 'Flexibility',
      'description': 'Office 365 Exchange Online offers the an extensive list of features. Users can tailor their solutions to their unique needs.'
    },
    {
      'name': 'Collaboration',
      'description': 'Resource mailboxes to automate the management of equipment and conference rooms. Calendar and contact sharing to work together seamlessly.'
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
    'Office 365 F1',
    'Office 365 G1',
    'Office 365 G3',
    'Office 365 G5',
    'Office 365 Nonprofit Business Premium',
    'Office 365 Nonprofit Business Essentials',
    'Exchange Online (Plan 1)',
    'Exchange Online (Plan 2)'
  ],
  'platforms': {
    'web': 'http://mail.office365.com',
    'pc': 'https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658',
    'mac': 'https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658',
    'android': 'https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=en_US',
    'iPhone': 'https://itunes.apple.com/us/app/microsoft-outlook/id951937596?mt=8'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://products.office.com/en-us/exchange/exchange-online'
    },
    {
      'title': 'News',
      'url': 'https://blogs.technet.microsoft.com/blog/tag/exchange-online/'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/ExchangeOnline'
    },
    {
      'title': 'Roadmap',
      'url': 'https://products.office.com/en-us/business/office-365-roadmap?filters=exchange'
    },
    {
      'title': 'Admin Training',
      'url': 'https://mva.microsoft.com/en-us/training-courses/managing-exchange-online-using-microsoft-online-console-8336'
    }
  ],
  'competitors': [
    {
      'name': 'G Suite',
      'url': 'https://gsuite.google.com/',
      'image': '/assets/icons/G-Suite.png'
    },
    {
      'name': 'Zoho Mail',
      'url': 'https://www.zoho.com/mail/',
      'image': '/assets/icons/zoho-mail.png'
    },
    {
      'name': 'Exchange Server',
      'url': 'https://products.office.com/en-us/exchange/microsoft-exchange-server-2016',
      'image': '/assets/icons/exchange-2010.png'
    }
  ],
  'compliance': {
    'tier': 'Tier A-Compliant',
    'url': 'https://docs.microsoft.com/en-us/microsoftteams/security-compliance-overview',
    'standards': [
      'HIPAA / HITECH',
      'ISO/IEC 27001',
      'ISO/IEC 27018',
      'SOC 1',
      'SOC-2',
      'DISA',
      'FDA 21 CFR Part 11',
      'FERPA',
      'Argentina PDPA',
      'CSA-CCM',
      'CS Mark (Gold)',
      'ENISA IAF',
      'EU Model Clauses',
      'FedRAMP',
      'FIPS 140–2',
      'FISC',
      'FISMA',
      'GxP',
      'CCSL (IRAP)',
      'Japan My Number Act',
      'MTCS',
      'NZ CC Framework',
      'Section 508 / VPATs',
      'SHARED ASSESSMENTS',
      'ENS Spain',
      'UK G-Cloud'
    ]
  },
  'requests': [
    {
      'votes': 1700,
      'title': 'Export mailbox in Exchange Online to pst using PowerShell or other method'
    },
    {
      'votes': 1700,
      'title': 'Enable and disable Clutter from Admin Panel'
    },
    {
      'votes': 1300,
      'title': 'GAL Federation between different O365 tenants'
    },
    {
      'votes': 1200,
      'title': 'Delegate permissions for managing MFA'
    },
    {
      'votes': 600,
      'title': 'Allow emails to be delayed in OWA'
    }
  ],
  'title': 'Exchange Online',
  'datePublished': '2018-06-06T06:00:00.000Z',
  'dateModified': '2018-06-06T06:00:00.000Z',
  'image1200x1200': '/apps/assets/exchange-online-1200x1200.jpg',
  'image1200x900': '/apps/assets/exchange-online-1200x900.jpg',
  'image1200x675': '/apps/assets/exchange-online-1200x675.jpg',
  'image400x300': '/apps/assets/exchange-online-400x300.jpg',
  'canonical': '/apps/exchange-online',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app
