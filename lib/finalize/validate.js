const {resolve} = require('path')
const Glob = require('glob').Glob
const sizeOf = require('image-size')

const validate = () => {
  const docx = Glob(resolve(__dirname, '..', '..', 'drafts', '*.docx'), {sync:true}).found
  if (docx.length != 1) throw 'Should be 1 docx in drafts.'

  const jpg = Glob(resolve(__dirname, '..', '..', 'drafts', '*.jpg'), {sync:true}).found
  if (jpg.length != 3) throw 'Should be 3 images in drafts.'

  const pptx = Glob(resolve(__dirname, '..', '..', 'drafts', '*.pptx'), {sync:true}).found
  if (pptx.length != 3) throw 'Should be 3 pptx in drafts.'

  const jpg1200 = Glob(resolve(__dirname, '..', '..', 'drafts', '1200x1200.jpg'), {sync:true}).found
  if (jpg1200.length != 1) throw 'Must have a 1200x1200.jpg in drafts.'
  if (sizeOf(jpg1200[0]).width != 1200) throw '1200x900.jpg must be 1200 px wide.'
  if (sizeOf(jpg1200[0]).height != 1200) throw '1200x900.jpg must be 1200 px height.'

  const jpg900 = Glob(resolve(__dirname, '..', '..', 'drafts', '1200x900.jpg'), {sync:true}).found
  if (jpg900.length != 1) throw 'Must have a 1200x900.jpg in drafts.'
  if (sizeOf(jpg900[0]).width != 1200) throw '1200x900.jpg must be 1200 px wide.'
  if (sizeOf(jpg900[0]).height != 900) throw '1200x900.jpg must be 900 px height.'

  const jpg675 = Glob(resolve(__dirname, '..', '..', 'drafts', '1200x675.jpg'), {sync:true}).found
  if (jpg675.length != 1) throw 'Must have a 1200x675.jpg in drafts.'
  if (sizeOf(jpg675[0]).width != 1200) throw '1200x900.jpg must be 1200 px wide.'
  if (sizeOf(jpg675[0]).height != 675) throw '1200x900.jpg must be 675 px height.'

  return true
}

module.exports = {validate}
