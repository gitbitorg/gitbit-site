const fs = require('fs')
const {resolve} = require('path')

const start = () => {
  fs.readdirSync(resolve(__dirname, 'views', 'pages', 'apps')).forEach(file => {
    const app = require(resolve(__dirname, 'views', 'pages', 'apps', file))
    console.log(`.header-color-${app.color} h1, .header-color-${app.color} h2, .header-color-${app.color} h3 { color: #${app.color}; }`)
  })
  //
}

start()

// const sharp = require('sharp')
// const fs = require('fs')
// const {resolve} = require('path')
//
// const start = () => {
//   fs.readdirSync('C:\\Users\\JohnGruber\\Documents\\gitbit-site\\drafts').forEach(file => {
//     if (file != 's') {
//       // console.log(resolve(__dirname, 'drafts', file))
//       sharp(resolve(__dirname, 'drafts', file))
//         .resize(96)
//         .png()
//         .toFile(resolve(__dirname, 'drafts', 's', file))
//         .catch(err => {
//           console.log(resolve(__dirname, 'drafts', file))
//           console.log(err)
//         })
//     }
//   })
//
// }
//
// start()
