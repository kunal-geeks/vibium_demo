const fs = require('fs')
const { browserSync } = require('vibium')

const vibe = browserSync.launch()

vibe.go('https://google.com')
console.log('Loaded google.com')

const png = vibe.screenshot()
fs.writeFileSync('screenshot.png', png)
console.log('Saved screenshot.png')

const link = vibe.find('a')
console.log('Found link:', link.text())
link.click()
console.log('Clicked link')

vibe.quit()
console.log('Done')
