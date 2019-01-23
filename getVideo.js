function getVideoUrl() {
  const arr = document.querySelectorAll('video')
  let str = ''
  for (var i = 0; i < 1; i++) {
    if (arr[i]) {
      str = arr[0].src
    } else {
      break
    }
  }
  return str
}

function onWindowLoad() {
  chrome.runtime.sendMessage({
    action: 'ADD_VIDEO_URL',
    payload: getVideoUrl()
  })
}

window.onload = onWindowLoad
