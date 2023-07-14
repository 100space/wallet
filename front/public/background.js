/* eslint-disable no-undef */
//background.js
const userAgent = navigator.userAgent.toLowerCase()
const isChrome = userAgent.includes("chrome")
if (isChrome) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const { from, type, method, params } = request
        if (from && from === "event") {
            chrome.runtime.sendMessage({ from: "background", type: "fromBackground", method, params }, (resp) => {
                resp && sendResponse({ type: "res_external", response: resp.response })
            })
        }
        return true // Will respond asynchronously.
    })
}
