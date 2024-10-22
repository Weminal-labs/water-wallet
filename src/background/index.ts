chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GET_ACCESS_TOKEN') {
    chrome.identity.getAuthToken({
      interactive: true,

    }, (token) => {
      chrome.identity.getProfileUserInfo({
        accountStatus: "ANY"
      }, (userInfo) => {
        console.log('userInfo', userInfo)
        console.log('token', token)

        sendResponse({ token, userInfo })
      })
    })
  } else if (request.type === 'GET_USER_INFO') {
    chrome.identity.getProfileUserInfo({
      accountStatus: "ANY"
    }, (userInfo) => {
      console.log('userInfo', userInfo)
      sendResponse({ userInfo })
    })
  } else if (request.type === 'SIGN_OUT') {
    chrome.identity.getAuthToken({ interactive: false }, (result) => {
      try {
        revokeToken(result);
      } catch (revokeError) {
        console.warn('Token revocation failed:', revokeError.message);
        // Continue with sign out process even if revocation fails
      }
      chrome.identity.removeCachedAuthToken({ token: result }, () => {
        sendResponse({ success: true });
      })
    })
  }
  return true // Inform Chrome that we will make a delayed sendResponse
});

async function revokeToken(token: string): Promise<void> {
  const response = await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to revoke token. Status: ${response.status}, Response: ${errorText}`);
  }
}
