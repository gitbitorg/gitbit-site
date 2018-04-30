const head = `extends ../../layout-article.pug
block article
`

const convertPugToArticle = (pug) => {
  pug = pug.replace('html\n', '')
  pug = pug.replace('  body\n', '')
  const lines = pug.split('\n')
  pug = lines.reduce((acc, line) => {
    acc += line.replace('  ', '') + '\n'
    return acc
  }, '')
  pug = head + pug

  return pug
}

module.exports = {convertPugToArticle}
