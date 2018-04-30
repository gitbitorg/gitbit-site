const fs = require('fs')
const Glob = require('glob').Glob

const {found} = Glob('../docs/**/*.compress', {sync:true})

found.forEach((file) => {
  console.log(file)
  fs.renameSync(file, file.replace('.compress', ''))
})
