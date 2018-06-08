const sharp = require('sharp')
const fs = require('fs')
const {resolve} = require('path')

const start = () => {
  fs.readdirSync('C:\\Users\\JohnGruber\\Documents\\gitbit-site\\drafts').forEach(file => {
    if (file != 's') {
      // console.log(resolve(__dirname, 'drafts', file))
      sharp(resolve(__dirname, 'drafts', file))
        .resize(96)
        .png()
        .toFile(resolve(__dirname, 'drafts', 's', file))
        .catch(err => {
          console.log(resolve(__dirname, 'drafts', file))
          console.log(err)
        })
    }
  })

}

start()
