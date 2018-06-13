const encode = (str, limitStringLength = true) => {
  str = str.replace(/[^a-zA-Z 0-9]/g, '')
  str = str.replace(/ /g, '-')
  limitStringLength ? str = str.substring(0, 30) : null

  return str.toLowerCase()
}

module.exports = {encode}
