const roadmap = require('./cache2.json')

const filterByTag = (roadmapItms, tag) =>
  roadmapItms.filter((itm) => {
    const itmTags = itm.tags.map((itmTag) => itmTag.tagName)
    return itmTags.includes(tag)
  })

const filterByStatus = (roadmapItms, status) =>
  roadmapItms.filter((itm) => itm.status.toLowerCase() == status.toLowerCase())

const sortByModified = (roadmapItms) =>
  roadmapItms.sort((a, b) => new Date(a.modified) < new Date(b.modified) ? -1 : 1)

const getRoadmap = (tag, status) => {
  let roadmapItms = roadmap

  if (tag) roadmapItms = filterByTag(roadmapItms, tag)
  if (status) roadmapItms = filterByStatus(roadmapItms, status)
  roadmapItms = sortByModified(roadmapItms)

  console.log(roadmapItms.map((itm) => ({title: itm.title, description:itm.description})))
}

module.exports = {getRoadmap}

getRoadmap('Microsoft Teams', 'Rolling Out')
