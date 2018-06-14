const {join} = require('path')
const {Glob} = require('glob')

const src = join(__dirname, '..', 'src')

describe('src', () => {
  const files = Glob(`${src}/**/*.*`, {sync:true}).found

  files.forEach((file) => {
    describe(file, () => {
      test('name should be lower case', () => {
        const relativePath = file.split('src')[1]
        const isLower = relativePath == relativePath.toLowerCase()

        if (!isLower && file.endsWith('.js') && require(file).redirect)
          expect(true).toEqual(true)
        else
          expect(isLower).toEqual(true)
      })
    })
  })
})
