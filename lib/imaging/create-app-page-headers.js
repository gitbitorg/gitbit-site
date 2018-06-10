// Creates header images for the app page
const {resolve} = require('path')
const sharp = require('sharp')
const fs = require('fs')
const appIconsDir = resolve(__dirname, 'app-icons')
const workingDir = resolve(__dirname, 'working')

const create = async (width, height, iconWidth=225, iconHeight=225) => {
  const appIcons =  fs.readdirSync(appIconsDir).map(file => resolve(appIconsDir, file))

  await sharp({create:{width, height, channels: 4, background: 'white'}})
    .jpeg()
    .toFile(resolve(workingDir, '0.jpg'))

  const iconsPerRow = Math.floor(width/iconWidth)
  const iconRows = Math.floor(height/iconHeight)
  const paddingVertical = Math.floor((height % (iconHeight * iconRows)) / (iconRows + 1))
  const paddingHorizontal = Math.floor((width % (iconWidth * iconsPerRow)) / (iconsPerRow + 1))

  let workingFile
  for (let i = 0; i < appIcons.length; i++) {
    const iconRow = Math.floor(i/iconsPerRow)
    const iconColumn = Math.floor(i % iconsPerRow)

    const top = iconRow * iconHeight + (iconRow*paddingVertical+paddingVertical)
    const left = iconColumn * iconWidth + (iconColumn*paddingHorizontal+paddingHorizontal)

    if (iconRow < iconRows) {
      await sharp(resolve(workingDir, `${i}.jpg`))
        .overlayWith(await sharp(appIcons[i]).resize(iconWidth,iconHeight).toBuffer(), {top, left})
        .toFile(resolve(workingDir, `${i+1}.jpg`))
      workingFile = resolve(workingDir, `${i+1}.jpg`)
    }
  }

  await sharp(workingFile)
    .overlayWith(await sharp(resolve(__dirname, 'office365.png')).resize(iconWidth*3).toBuffer())
    .toFile(resolve(__dirname, `apps-${width}x${height}.jpg`))
}

// create(1200, 1200, 210, 210)
// create(1200, 900, 190, 190)
// create(1200, 675, 150, 150)
// create(400, 300, 60, 60)
