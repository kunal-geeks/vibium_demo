const { launchBrowser } = require('../utils/browser')
const { takeScreenshot } = require('../utils/screenshot')
const users = require('../data/users.json')

const vibe = launchBrowser()

try {
  vibe.go('https://www.saucedemo.com')

  vibe.find('#user-name').type(users.invalidPassword.username)
  vibe.find('#password').type(users.invalidPassword.password)
  vibe.find('#login-button').click()

  const error = vibe.find('[data-test="error"]').text()
  console.log('Error:', error)

  if (!error.includes('do not match')) {
    throw new Error('Expected error not shown')
  }

} catch (err) {
  takeScreenshot(vibe, 'negative-login-failure')
  console.error(err.message)
} finally {
  vibe.quit()
}
