function getLinkUrls() {
  const arr = document.querySelectorAll('a')
  const newArr = []
  for (var i = 0; i < 2; i++) {
    if (arr[i]) {
      openNewBackgroundTab(arr[i].href)
    } else {
      break
    }
  }
}

function openNewBackgroundTab(payload) {
  chrome.runtime.sendMessage({
    action: 'OPEN_TAB',
    payload
  })
}

localStorage.setItem('video_urls', '[]')

chrome.runtime.onMessage.addListener(function(request) {
  console.log(request)
  switch (request.action) {
    case 'ADD_VIDEO_URL':
      const urls = JSON.parse(localStorage.getItem('video_urls'))
      urls.push(request.payload)
      console.log(request.payload)
      localStorage.setItem('video_urls', JSON.stringify(urls))
  }
})

getLinkUrls()
