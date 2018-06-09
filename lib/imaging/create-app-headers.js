// Creates header images for each ap page

const {resolve} = require('path')
const sharp = require('sharp')
const fs = require('fs')
const appIconsDir = resolve(__dirname, 'app-icons')
const workingDir = resolve(__dirname, 'working')

const create1200x900 = async () => {
  const appIcons =  fs.readdirSync(appIconsDir)


  for (let i = 0; i < appIcons.length; i++) {
    const appName = appIcons[i].substring(0, appIcons[i].length - 4)
    const iconPath = resolve(__dirname, 'app-icons', appIcons[i])

    const icon400 = await sharp(iconPath).resize(400,400).toBuffer()
    await sharp(resolve(__dirname, '1200x900.jpg'))
      .overlayWith(icon400, {top:100, left:Math.round((1200-400)/2)})
      .jpeg()
      .toFile(resolve(workingDir, `${appName}-1200x900.jpg`))

    await sharp(resolve(workingDir, `${appName}-1200x900.jpg`))
      .resize(400,300)
      .toFile(resolve(workingDir, `${appName}-400x300.jpg`))

    const icon300 = await sharp(iconPath).resize(300,300).toBuffer()
    await sharp(resolve(__dirname, '1200x675.jpg'))
      .overlayWith(icon300, {top:75, left:Math.round((1200-300)/2)})
      .jpeg()
      .toFile(resolve(workingDir, `${appName}-1200x675.jpg`))

    const icon600 = await sharp(iconPath).resize(600,600).toBuffer()
    await sharp(resolve(__dirname, '1200x1200.jpg'))
      .overlayWith(icon600, {top:Math.round((1200-600)/2), left:Math.round((1200-600)/2)})
      .jpeg()
      .toFile(resolve(workingDir, `${appName}-1200x1200.jpg`))
  }
}

create1200x900()
