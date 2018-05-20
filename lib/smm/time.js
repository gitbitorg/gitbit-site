const addHours = (hours, date) => {
  date ? null : date = new Date()
  const time = date.getTime()
  return new Date(time + hours * 3600000)
}

module.exports = {addHours}
