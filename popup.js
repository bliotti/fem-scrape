localStorage.setItem('video_urls', '[]')
chrome.runtime.onMessage.addListener(function(request, sender) {
  switch (request.action) {
    case 'ADD_VIDEO_URL':
      const urls = JSON.parse(localStorage.getItem('video_urls'))
      urls.push(request.payload)
      console.log(request.payload)
      localStorage.setItem('video_urls', JSON.stringify(urls))
    case 'OPEN_TAB':
      chrome.tabs.create({ url: request.payload, active: false })
  }
})

function onWindowLoad() {
  var message = document.querySelector('#message')

  chrome.tabs.executeScript(
    null,
    {
      file: 'startingPage.js'
    },
    function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (chrome.runtime.lastError) {
        message.innerText =
          'There was an error injecting script : \n' +
          chrome.runtime.lastError.message
      }
    }
  )
}

window.onload = onWindowLoad
