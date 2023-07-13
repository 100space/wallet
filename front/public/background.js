/* eslint-disable no-undef */
//background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { from, type, method, params } = request
    console.log(request)
    if (from && from === "event") {
        chrome.runtime.sendMessage({ from: "background", type: "fromBackground", method, params }, (resp) => {
            console.log(resp, "resp in background.js", 11111111)
            resp && sendResponse({ type: "res_external", response: resp.response })
        })
    }
    return true // Will respond asynchronously.
})
