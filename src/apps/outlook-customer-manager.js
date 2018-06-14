const {join} = require('path')
const roadmap = require(join(__dirname, '..', '..', 'lib', 'roadmap'))

const app = {
  'name': 'Outlook Customer Manager',
  'description': 'CRM',
  'icon': '/assets/icons/outlook-customer-manager.png',
  'video': 'http://www.youtube.com/embed/S2UiUka6dxc',
  'rating': '63%',
  'color': '0078d7',
  'testimonials': [
    {
      'text': '"Outlook Customer Manager is a great tool to quickly pick up how to use a CRM, and see the benefits of gaining a 360 degree view of your customers."'
    },
    {
      'text': '"In practical terms, Outlook Customer Manager can streamline workflow and organize all the data about a specific client in one location."'
    }
  ],
  'features': [
    {
      'name': 'CRM',
      'description': 'Track customers, deals, tasks, notes, and more in one simple to use space.'
    },
    {
      'name': 'Integrated in Outlook',
      'description': 'Outlook Customer Manager ingregrates a CRM directly into Outlook making it one of the easiest CRMs to use.'
    },
    {
      'name': 'Collaborate',
      'description': 'Share customer information with your whole team so that customers have a consistent experience no matter who they talk to.'
    }
  ],
  'licenses': [
    'Office 365 Business Premium'
  ],
  'platforms': {
    'web': 'https://support.office.com/en-us/article/get-started-with-outlook-customer-manager-48331ce0-c356-4186-8987-c86676520dc7',
    'pc': 'https://support.office.com/en-us/article/get-started-with-outlook-customer-manager-48331ce0-c356-4186-8987-c86676520dc7',
    'mac': 'https://support.office.com/en-us/article/get-started-with-outlook-customer-manager-48331ce0-c356-4186-8987-c86676520dc7',
    'iPhone': 'https://itunes.apple.com/app/outlook-customer-manager/id1139370461?mt=8'
  },
  'resources': [
    {
      'title': 'Homepage',
      'url': 'https://products.office.com/en-us/business/outlook-customer-relationship-manager'
    },
    {
      'title': 'FAQ',
      'url': 'https://support.office.com/en-us/article/outlook-customer-manager-faq-88e127ca-43a1-4c9d-8d52-6ad3a80f9c32?ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'Twitter',
      'url': 'https://twitter.com/hashtag/OutlookCustomerManager'
    },
    {
      'title': 'User Training',
      'url': 'https://support.office.com/en-us/article/get-started-with-outlook-customer-manager-48331ce0-c356-4186-8987-c86676520dc7?ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'Admin Training',
      'url': 'https://support.office.com/en-us/article/customize-outlook-customer-manager-e7411d12-cc64-4793-8211-eda1aaef78a3?ui=en-US&rs=en-US&ad=US'
    },
    {
      'title': 'UserVoice',
      'url': 'https://outlook.uservoice.com/forums/407082-outlook-customer-manager/filters/top'
    }
  ],
  'competitors': [
    {
      'name': 'HubSpot',
      'url': 'https://www.hubspot.com/',
      'image': '/assets/icons/hubspot.png'
    },
    {
      'name': 'SalesForce',
      'url': 'https://www.salesforce.com/',
      'image': '/assets/icons/salesforce.png'
    },
    {
      'name': 'Dynamics 365',
      'url': '/apps/dynamics-365',
      'image': '/assets/icons/dynamics-365-96px.png'
    }
  ],
  'requests': [
    {
      'votes': 1700,
      'title': 'Add support for Office 365 E3 and E5 tenants (as well as E1 and E2)'
    },
    {
      'votes': 400,
      'title': 'Make Outlook Customer Manager available in Outlook Online (Outlook Web Acess)'
    },
    {
      'votes': 280,
      'title': 'Outlook Customer Manager for Android'
    },
    {
      'votes': 240,
      'title': 'Outlook MAC'
    },
    {
      'votes': 200,
      'title': 'Make Outlook Customer Manager available also offline'
    }
  ],
  'title': 'Outlook Customer Manager',
  'datePublished': '2018-06-07T06:00:00.000Z',
  'dateModified': '2018-06-07T06:00:00.000Z',
  'image1200x1200': '/apps/assets/outlook-customer-manager-1200x1200.jpg',
  'image1200x900': '/apps/assets/outlook-customer-manager-1200x900.jpg',
  'image1200x675': '/apps/assets/outlook-customer-manager-1200x675.jpg',
  'image400x300': '/apps/assets/outlook-customer-manager-400x300.jpg',
  'canonical': '/apps/outlook-customer-manager',
  'template': '/apps/app.template.pug'
}
app.updates = roadmap.getLatest(app.tag)
module.exports = app