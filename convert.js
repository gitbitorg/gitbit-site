const fs = require('fs')
const mammoth = require('mammoth')
const html2pug = require('html2pug')

const start = async () => {
  const html = await mammoth.convertToHtml({path: './drafts/test.docx'})
  console.log(html.value)
  const pug = html2pug(html.value, { tabs: true })
  console.log(pug)
  fs.writeFileSync('test.pug', pug)
}

start()
