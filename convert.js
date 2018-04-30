const fs = require('fs')
const mammoth = require('mammoth')
const html2jade = require('html2jade')

const start = async () => {
  const html = await mammoth.convertToHtml({path: './drafts/test.docx'})
  console.log(html.value)
  html2jade.convertHtml(html.value, {}, function (err, pug) {
    console.log(pug)
    fs.writeFileSync('test.pug', pug)
  })
}

start()
