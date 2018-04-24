const fs = require('fs')
const glob = require('glob')

const clean = () => {
  glob('docs/**.html', (err, files) => {
    if (err) throw err
    files.forEach((file) => {
      fs.unlinkSync(file)
    })
  })
}

clean()
