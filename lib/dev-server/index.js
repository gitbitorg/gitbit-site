const {resolve} = require('path')
const express = require('express')
const app = express()

app.use(express.static(resolve(__dirname, '..', '..', 'docs'),{extensions:['html']}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
