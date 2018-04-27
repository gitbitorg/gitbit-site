const sharp = require('sharp')

const start = async () => {
  const sizes = [
    [1200, 1200],
    [1200, 900],
    [1200, 675],
    [400, 300]
  ]

  sizes.forEach((size) => {
    sharp('./image/original.jpg')
      .resize(size[0], size[1])
      .sharpen()
      .overlayWith('./image/logo.png', { gravity: sharp.gravity.southeast } )
      .toFile(`./image/${size[0]}x${size[1]}.jpg`)
  })

  sharp('./image/original.jpg')
    .resize(1200, 1200)
    .crop()
    .sharpen()
    .overlayWith('./image/logo.png', { gravity: sharp.gravity.southeast } )
    .toFile('./image/crop.jpg')
}

start()
