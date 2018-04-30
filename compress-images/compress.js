const Glob = require('glob').Glob
const sharp = require('sharp')

const {found} = Glob('../docs/**/*.+(jpg|png|jpeg)', {sync:true})

found.forEach((file) => {
  console.log(file)
  sharp(file).toFile(`${file}.compress`)
})
