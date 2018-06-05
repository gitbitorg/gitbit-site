module.exports = {
  name: 'Microsoft Teams',
  description: 'Chat-Based Workspace',
  icon: 'teams-icon.png',
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
    {title: 'News', url:'https://news.microsoft.com/microsoft-teams/'}
  ],
  competitors: [
    {name: 'Slack', url: 'https://slack.com/'},
    {name: 'Spark', url: 'https://www.cisco.com/c/en_uk/solutions/collaboration/ciscospark.html'},
    {name: 'Skype for Business', url: 'https://www.skype.com/en/business/'},
  ],
  compliance: {
    tier: 'Tier C-compliant',
    url: 'https://docs.microsoft.com/en-us/microsoftteams/security-compliance-overview',
    standards: [
      'ISO 27001', 'ISO 27018', 'SSAE16 SOC 1', 'SOC 2', 'HIPAA', 'EU Model Clauses (EUMC)'
    ]
  }
}
