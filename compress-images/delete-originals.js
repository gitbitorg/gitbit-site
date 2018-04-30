const fs = require('fs')
const Glob = require('glob').Glob

const {found} = Glob('../docs/**/*.+(jpg|png|jpeg)', {sync:true})
found.forEach((file) => {
  fs.unlinkSync(file)
})
