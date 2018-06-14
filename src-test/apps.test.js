const fs = require('fs')
const {join} = require('path')
const {Glob} = require('glob')
const sizeOf = require('image-size')

const src = join(__dirname, '..', 'src')

describe('app pages', () => {
  const appPaths = (Glob(`${src}/apps/**/!(index).js`, {sync:true})).found
  appPaths.forEach((appPath) => {
    const meta = require(appPath)

    describe(appPath, () => {
      describe('competitors', () => {
        if (meta.competitors) {
          test('should be array', () => {
            expect(Array.isArray(meta.competitors)).toBe(true)
          })

          meta.competitors.forEach((competitor, idx) => {
            describe(`competitor[${idx}]`, () => {
              test('should be object', () => {
                expect(typeof competitor).toEqual('object')
              })

              describe('name', () => {
                test('property should exist', () => {
                  expect(competitor.name).toBeDefined()
                  expect(typeof competitor.name).toBe('string')
                })
              })

              describe('image', () => {
                test('property should exist', () => {
                  expect(competitor.image).toBeDefined()
                  expect(typeof competitor.image).toBe('string')
                })

                test('should be path to a file', () => {
                  expect(fs.existsSync(join(src, competitor.image))).toBe(true)
                })

                test('should be 96x96', () => {
                  expect(sizeOf(join(src, competitor.image)).width).toBe(96)
                  expect(sizeOf(join(src, competitor.image)).height).toBe(96)
                })
              })

              describe('url', () => {
                test('property should exist', () => {
                  expect(competitor.url).toBeDefined()
                  expect(typeof competitor.url).toBe('string')
                })
              })
            })
          })
        }

      })
    })
  })
})
