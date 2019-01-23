function getVideoUrl() {
  //   const arr = document.querySelectorAll('video')
  //   const newArr = []
  //   newArr[i] = arr[0].src
  //   return newArr.toString()
  return JSON.stringify(Math.random())
}
chrome.runtime.sendMessage({
  action: 'ADD_VIDEO_URL',
  payload: getVideoUrl()
})
