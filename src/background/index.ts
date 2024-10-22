chrome.runtime.onMessage.addListener(async (request) => {
  if (request.type === 'COUNT') {
    console.log('background has received a message from popup, and count is ', request?.count)
  } else if (request.type === 'GET_ACCESS_TOKEN') {
    const token = await chrome.identity.getAuthToken({
      interactive: true,
    })
    console.log('token', token)
  } else if (request.type === 'GET_USER_INFO') {
    const userInfo = await chrome.identity.getProfileUserInfo({
      accountStatus: "ANY"
    })
    console.log('userInfo', userInfo)
  }
})
