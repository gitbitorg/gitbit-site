const Glob = require('glob').Glob
const {resolve} = require('path')
const time = require(resolve(__dirname, 'lib', 'smm', 'time.js'))
const {Posts} = require(resolve(__dirname, '..', 'workplace', 'packages', 'sharepoint'))

// const BitlyClient = require('bitly')
//
// const time = require(resolve(__dirname, 'lib', 'smm', 'time'))
//
// const createTemplateObject = (url, Title, summary, postafter) => {
//   postafter ? null : postafter = new Date()
//   return {url, Title, summary, postafter, app: 'twitter',}
// }
//
// const createBitly = async (url) => {
//   const bitlyAccessToken = await Apps.get('bitly')
//   const bitly = BitlyClient(bitlyAccessToken.client_secret)
//   return (await bitly.shorten(url)).data.url
// }
//
const hashtag = (keywords) => keywords.map((keyword) => '#' + keyword.split(' ').join('')).join(' ')

const start = async () => {
  const apps = (Glob('views/pages/apps/!(index).js', {sync:true})).found
    .map(path => require(resolve(__dirname, path)))

  const posts = apps.map((app, idx) => ({
    url: {Url:`http://gitbit.org${app.canonical}`},
    Title: `Executive Summary of ${app.name}`,
    Description: `Executive summary of the Office 365 bundled app ${app.name}.\nQuickly learn about features, platform support, licensing requirements, and more.\n${hashtag(app.keywords.split(', '))}`,
    PostAt: time.addHours(idx*24)
  }))

  const results = await Posts.post(posts)
  results.forEach((result, idx) => {
    console.log(posts[idx].Title)
    console.log(result.statusCode)
    console.log('')
  })

  // for (let i = 0; i < apps.length; i++) {
  //   apps[i].shortenedurl = await createBitly(`http://gitbit.org/${apps[i].canonical}`)
  // }
  //
  // const posts = apps
  //   .map((app, idx) =>
  //     createTemplateObject(
  //       `http://gitbit.org${app.canonical}`,
  //       `${app.name} app page launch`,
  //       `Executive Summary of ${app.name}\n${hashtag(app.keywords.split(', '))}\n${app.shortenedurl}`,
  //       time.addHours(idx*24)
  //     ))
  //
  // const results = await Posts.post(posts)
  // results.forEach((result, idx) => {
  //   console.log(posts[idx].summary)
  //   console.log(result.statusCode)
  //   console.log('')
  // })
}

start()
