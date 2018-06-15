const reddit = require('./reddit')

const Keywords = [ { Id: 1,
  Title: 'office 365',
  ID: 1,
  Modified: '2018-05-16T20:37:05Z',
  Created: '2018-05-16T20:37:05Z',
  AuthorId: 6,
  EditorId: 6,
  GUID: '74efb795-9cb8-4db2-841d-81436eb504ce' },
{ Id: 18,
  Title: 'project management',
  ID: 18,
  Modified: '2018-05-16T20:50:16Z',
  Created: '2018-05-16T20:50:16Z',
  AuthorId: 6,
  EditorId: 6,
  GUID: '95be8c8a-c2da-4702-914f-b300281d4ca0' } ]
const URL = 'http://gitbit.org/articles/Agile-Teamwork-with-Office-365-Planner'
const META = { wordCount: 1304,
  title: 'Agile Teamwork with Office 365 Planner',
  description: 'How to improve productivity and organization using Microsoft Office 365\'s Planner app.',
  keywords: 'Microsoft Planner, Scrum, Project Management',
  assetsFolder: 'Microsoft-Planner-Intro',
  fileName: 'Agile-Teamwork-with-Office-365-Planner',
  datePublished: '2018-05-15T11:34:51.272Z',
  dateModified: '2018-05-15T11:34:51.272Z',
  image1200x1200: 'http://gitbit.org/assets/article/Microsoft-Planner-Intro/1200x1200.jpg',
  image1200x900: 'http://gitbit.org/assets/article/Microsoft-Planner-Intro/1200x900.jpg',
  image1200x675: 'http://gitbit.org/assets/article/Microsoft-Planner-Intro/1200x675.jpg',
  image400x300: 'http://gitbit.org/assets/article/Microsoft-Planner-Intro/400x300.jpg',
  canonical: '/articles/Agile-Teamwork-with-Office-365-Planner',
  filename: 'C:\\Users\\JohnGruber\\Documents\\gitbit-site\\views\\pages\\articles\\Agile-Teamwork-with-Office-365-Planner.pug' }

describe('smm/reddit', () => {
  let results

  beforeAll(async () => {
    results = await reddit.createTemplates(Keywords, URL, META)
  })

  // test('should return multiple subreddits', async () => {
  //   expect(results.length).toBe(7)
  // })

  test('should set title to article title', async () => {
    expect(results[0].Title).toBe(META.title)
  })

  test('should set app to reddit', async () => {
    expect(results[0].app).toBe('reddit')
  })

  test('should set url to article url', async () => {
    expect(results[0].url).toBe(URL)
  })

  test('should space posts by one hour', async () => {
    expect(results[0].postafter.getHours()+1).toEqual(results[1].postafter.getHours())
  })
})
