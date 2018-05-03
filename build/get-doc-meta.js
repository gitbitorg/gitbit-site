const util = require('util')
const getDocProps = util.promisify(require('office-document-properties').fromFilePath)

const getMeta = async (path) => {
  const meta = await getDocProps(path)

  if (!meta.title || meta.title.length == 0)
    throw `Document (${path}) needs a title.`

  if (!meta.comments || meta.comments.length == 0)
    throw `Document (${path}) needs a description entered in the comments field.`

  if (!meta.keywords || meta.keywords.split(';').length < 3)
    throw `Document (${path}) needs atleast three keywords.`

  if (!meta.subject || meta.subject.length == 0)
    throw `Document (${path}) needs a subject that's used as a base folder for assets.`

  if (meta.subject.indexof(' ') > -1)
    throw `Document (${path}) subject connot contain a space. It's used for the base folder for assets.`

  return meta
}

module.exports = {getMeta}
