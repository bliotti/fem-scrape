function getVideoUrl() {
  //   const arr = document.querySelectorAll('video')
  //   const newArr = []
  //   newArr[i] = arr[0].src
  //   return newArr.toString()
  return JSON.stringify(Math.random())
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.runtime.sendMessage({
    action: 'ADD_VIDEO_URL',
    payload: getVideoUrl()
  })
})

console.log('gvghjvuytcrtexert')
