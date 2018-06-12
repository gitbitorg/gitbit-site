const fs = require('fs')
const {resolve} = require('path')
const express = require('express')
const app = express()
const compile = require('../compile')

app.use(express.static(resolve(__dirname, '..', '..', 'dest'),{extensions:['html']}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

fs.watch(resolve(__dirname, '..', '..', 'src'), () => {
  compile.compilePages()
})
