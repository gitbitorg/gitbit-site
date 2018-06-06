module.exports = {
  name: 'Microsoft Teams',
  description: 'Chat-Based Workspace',
  icon: '/assets/icons/teams-icon.png',
  video: 'https://youtu.be/ENEQzM2u_vA',
  features: [
    {
      name: 'Group Chat',
      description: 'One-to-many messaging to collaborate with coworkers and external users. Keep projects, departments, and everyone up-to-date and organized all in one place.'
    },
    {
      name: 'Private Messaging',
      description: 'One-to-one messaging to collaborate with coworkers or external users. Collaborate using text, voice, or video. Quickly share documents, images, and more.'
    },
    {
      name: 'Workspace',
      description: 'Every team can customize their workspace with Tabs, Connectors and Bots. With over 150 integrations, file uploads, and chat every team can build a custom space for their team.'
    }
  ],
  licenses: [
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
  platforms: {
    web: 'https://teams.microsoft.com',
    pc: 'https://teams.microsoft.com/downloads',
    mac: 'https://teams.microsoft.com/downloads',
    android: 'https://play.google.com/store/apps/details?id=com.microsoft.teams',
    iPhone: 'https://itunes.apple.com/app/id1113153706'
  },
  resources: [
    {title: 'Homepage', url:'https://products.office.com/en-us/microsoft-teams/group-chat-software'},
    {title: 'News', url:'https://news.microsoft.com/microsoft-teams/'},
    {title: '8 Updates to Help Migrate and Collaborate between Skype and Teams', url:'http://gitbit.org/articles/8-Updates-to-Help-Migrate-and-Collaborate-between-Skype-and-Teams'},
    {title: 'Twitter', url: 'https://twitter.com/hashtag/MicrosoftTeams'},
    {title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Microsoft_Teams'},
    {title: 'YouTube', url: 'https://www.youtube.com/channel/UC0--6byMAe9otLougDShhUw'},
    {title: 'Roadmap', url: 'https://products.office.com/en-us/business/office-365-roadmap?filters=microsoft%20teams'},
    {title: 'UserVoice', url:'https://microsoftteams.uservoice.com'},
    {title: 'End User Training', url:'https://docs.microsoft.com/en-us/microsoftteams/enduser-training'},
    {title: 'Admin Training', url:'https://docs.microsoft.com/en-us/microsoftteams/itadmin-readiness'}
  ],
  competitors: [
    {name: 'Slack', url: 'https://slack.com/', image:'/assets/icons/Slack-Icon-96px.png'},
    {name: 'Spark', url: 'https://www.cisco.com/c/en_uk/solutions/collaboration/ciscospark.html', image:'/assets/icons/Cisco-Spark-96px.png'},
    {name: 'Skype for Business', url: 'https://www.skype.com/en/business/', image:'/assets/icons/Microsoft-Skype-for-Business-logo-96px.png'},
  ],
  compliance: {
    tier: 'Tier C-compliant',
    url: 'https://docs.microsoft.com/en-us/microsoftteams/security-compliance-overview',
    standards: [
      'ISO 27001', 'ISO 27018', 'SSAE16 SOC 1', 'SOC 2', 'HIPAA', 'EU Model Clauses (EUMC)'
    ]
  }
}
