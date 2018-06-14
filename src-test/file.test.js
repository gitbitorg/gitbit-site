const {join} = require('path')
const {Glob} = require('glob')

const src = join(__dirname, '..', 'src')

describe('src', () => {
  const files = Glob(`${src}/**/*.*`, {sync:true}).found

  files.forEach((file) => {
    describe(file, () => {
      test('name should be lower case', () => {
        const relativePath = file.split('src')[1]
        expect(relativePath).toEqual(relativePath.toLowerCase())
      })
    })
  })
})
