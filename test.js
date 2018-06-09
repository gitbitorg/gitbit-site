const Glob = require('glob').Glob

const start = () => {
  const apps = (Glob('views/pages/apps/!(index).js', {sync:true})).found

  console.log(apps)
  console.log(apps.length)
}

start()
