const fs = require('fs')
const {join} = require('path')
const {Glob} = require('glob')
const sizeOf = require('image-size')

const src = join(__dirname, '..', 'src')

describe('src', () => {
  const jsFiles = Glob(`${src}/**/*.js`, {sync:true}).found
  jsFiles.forEach((jsFile) => {
    const meta = require(jsFile)

    describe(jsFile, () => {
      describe('title', () => {
        test('property should exist', () => {
          expect(meta.title).toBeDefined()
          expect(typeof meta.title).toBe('string')
        })
      })

      describe('description', () => {
        test('property should exist', () => {
          expect(meta.description).toBeDefined()
          expect(typeof meta.description).toBe('string')
        })
      })

      describe('datePublished', () => {
        test('property should exist', () => {
          expect(meta.datePublished).toBeDefined()
          expect(typeof meta.datePublished).toBe('string')
        })

        test('should be date', () => {
          expect(new Date(meta.datePublished) != 'Invalid Date').toBe(true)
        })
      })

      describe('dateModified', () => {
        test('property should exist', () => {
          expect(meta.dateModified).toBeDefined()
          expect(typeof meta.dateModified).toBe('string')
        })

        test('should be date', () => {
          expect(new Date(meta.dateModified) != 'Invalid Date').toBe(true)
        })
      })

      describe('template', () => {
        test('property should exist', () => {
          expect(meta.template).toBeDefined()
          expect(typeof meta.template).toBe('string')
        })

        test('should be path to a file', () => {
          expect(fs.existsSync(join(src, meta.template))).toBe(true)
        })
      })

      describe('canonical', () => {
        test('property should exist', () => {
          expect(meta.canonical).toBeDefined()
          expect(typeof meta.canonical).toBe('string')
        })

        test('should be path to a file', () => {
          let relativePath = jsFile.split('src')[1].replace('/index.js', '').replace('.js', '')
          if (relativePath == '') relativePath = '/'
          expect(meta.canonical).toEqual(relativePath)
        })
      })

      describe('image1200x1200', () => {
        test('property should exist', () => {
          expect(meta.image1200x1200).toBeDefined()
          expect(typeof meta.image1200x1200).toBe('string')
        })

        test('should be path to a file', () => {
          expect(fs.existsSync(join(src, meta.image1200x1200))).toBe(true)
        })

        test('should be 1200x1200', () => {
          expect(sizeOf(join(src, meta.image1200x1200)).width).toBe(1200)
          expect(sizeOf(join(src, meta.image1200x1200)).height).toBe(1200)
        })
      })

      describe('image1200x900', () => {
        test('property should exist', () => {
          expect(meta.image1200x900).toBeDefined()
          expect(typeof meta.image1200x900).toBe('string')
        })

        test('should be path to a file', () => {
          expect(fs.existsSync(join(src, meta.image1200x900))).toBe(true)
        })

        test('should be 1200x900', () => {
          expect(sizeOf(join(src, meta.image1200x900)).width).toBe(1200)
          expect(sizeOf(join(src, meta.image1200x900)).height).toBe(900)
        })
      })

      describe('image1200x675', () => {
        test('property should exist', () => {
          expect(meta.image1200x675).toBeDefined()
          expect(typeof meta.image1200x675).toBe('string')
        })

        test('should be path to a file', () => {
          expect(fs.existsSync(join(src, meta.image1200x675))).toBe(true)
        })

        test('should be 1200x675', () => {
          expect(sizeOf(join(src, meta.image1200x675)).width).toBe(1200)
          expect(sizeOf(join(src, meta.image1200x675)).height).toBe(675)
        })
      })

      describe('image400x300', () => {
        test('property should exist', () => {
          expect(meta.image400x300).toBeDefined()
          expect(typeof meta.image400x300).toBe('string')
        })

        test('should be path to a file', () => {
          expect(fs.existsSync(join(src, meta.image400x300))).toBe(true)
        })

        test('should be 400x300', () => {
          expect(sizeOf(join(src, meta.image400x300)).width).toBe(400)
          expect(sizeOf(join(src, meta.image400x300)).height).toBe(300)
        })
      })
    })
  })
})
