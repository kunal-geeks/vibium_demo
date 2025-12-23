const { browser } = require('vibium')
const fs = require('fs')
const users = require('../data/users.json')

async function run() {
  const vibe = await browser.launch({ headless: true })

  try {
    await vibe.go('https://www.saucedemo.com')

    const username = await vibe.find('#user-name')
    const password = await vibe.find('#password')
    const loginBtn = await vibe.find('#login-button')

    username.type(users.invalidPassword.username)
    password.type(users.invalidPassword.password)
    loginBtn.click()

    const errorEl = await vibe.find('[data-test="error"]')

    const errorText = await errorEl.text()

    console.log('Error:', errorText)

    if (!errorText.includes('do not match')) {
      throw new Error('Expected error message not shown')
    }

    console.log('Negative login validation passed')

  } catch (err) {
    const screenshot = await vibe.screenshot()
    fs.writeFileSync(
      'artifacts/screenshots/negative-login-async.png',
      screenshot
    )
    console.error('Test failed:', err.message)
    process.exitCode = 1
  } finally {
    await vibe.quit()
  }
}

run()
