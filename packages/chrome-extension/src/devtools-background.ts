let created = false
let checkCount = 0

chrome.devtools.network.onNavigated.addListener(createPanelOnDetected)
const checkInterval = setInterval(createPanelOnDetected, 1000)
createPanelOnDetected()

function createPanelOnDetected() {
  if (created || checkCount++ > 10) {
    clearInterval(checkInterval)
    return
  }

  clearInterval(checkInterval)
  created = true
  chrome.devtools.panels.create(
    'Example Panel',
    'icons/128.png',
    'pages/devtools-panel.html',
  )
}
