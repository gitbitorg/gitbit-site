const {getMeta} = require('./get-doc-meta')
const {resolve} = require('path')

describe('get-doc-meta', () => {
  test('should return meta', async () => {
    const meta = await getMeta(resolve(__dirname, 'tests', 'has-meta.docx'))
    expect(meta.title).toBe('My Title')
    expect(meta.words).toBe(0)
    expect(meta.keywords).toBe('Tag1, Tag2, Tag3')
    expect(meta.subject).toBe('Assets-Folder')
    expect(meta.comments).toBe('This is my comment. It should be between how long?')
  })
})
