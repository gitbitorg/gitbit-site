// Creates header images for the app page
const {resolve} = require('path')
const sharp = require('sharp')
const fs = require('fs')
const appIconsDir = resolve(__dirname, 'app-icons')
const workingDir = resolve(__dirname, 'working')


const create1200x900 = async () => {
  const width = 1200
  const height = 1200
  const iconWidth = 225
  const iconHeight = 225

  const appIcons =  fs.readdirSync(appIconsDir).map(file => resolve(appIconsDir, file))

  await sharp({create:{width, height, channels: 4, background: 'white'}})
    .jpeg()
    .toFile(resolve(workingDir, '0.jpg'))

  const iconsPerRow = Math.floor(width/iconWidth)
  const iconRows = Math.floor(height/iconHeight)
  const paddingVertical = Math.floor((height % (iconHeight * iconRows)) / iconRows)
  const paddingHorizontal = Math.floor((width % (iconWidth * iconsPerRow)) / iconsPerRow)

  for (let i = 0; i < appIcons.length; i++) {
    const iconRow = Math.floor(i/iconsPerRow)
    const iconColumn = Math.floor(i % iconsPerRow)

    let top = iconRow * iconHeight + (iconRow*paddingVertical)
    if (top == 0) top = Math.floor(paddingVertical / 2)
    let left = iconColumn * iconWidth + (iconColumn*paddingHorizontal)
    if (left == 0) left = Math.floor(paddingHorizontal / 2)

    console.log(iconRow)
    console.log(iconRows)
    console.log(iconRow <= iconRows)
    console.log('')

    if (iconRow < iconRows)
      await sharp(resolve(workingDir, `${i}.jpg`))
        .overlayWith(await sharp(appIcons[i]).resize(iconWidth,iconHeight).toBuffer(), {top, left})
        .toFile(resolve(workingDir, `${i+1}.jpg`))
  }
}

create1200x900()
