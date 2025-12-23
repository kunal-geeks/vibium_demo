const fs = require('fs')
const path = require('path')

function takeScreenshot(vibe, name) {
  const buffer = vibe.screenshot()
  const filePath = path.join(
    'artifacts',
    'screenshots',
    `${name}.png`
  )
  fs.writeFileSync(filePath, buffer)
}

module.exports = { takeScreenshot }
