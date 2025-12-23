const { browserSync } = require('vibium')

function launchBrowser(options = {}) {
  return browserSync.launch({
    headless: false,
    ...options
  })
}

module.exports = { launchBrowser }
