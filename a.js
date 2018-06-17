const cheerio = require('cheerio')
const ampify = require('ampify')

const html = `
<div>
<a href="asdf">
  <img class="logo" src="/50.png" height="50" width="50" alt="GitBit Logo">
  <h1>GitBit</h1>
</a>
</div>
`

const start = () => {
  const $ = cheerio.load(html)
  $('img').each((i, element) => {
    const ampElement = Object.assign(element, {
      name: `amp-${element.name}`,
    })

    $(element).html($(ampElement).html())

    // $(element).replaceWith(ampElement)
  })
  console.log($('body').html())

  // const amp = ampify(html, {cwd:'/'})
  // console.log(amp)
}

start()
