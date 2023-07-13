/* eslint-disable no-undef */
//background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { from, type, method, params } = request
    console.log(request)
    if (type === "openPopup") {
        chrome.windows.getAll({ populate: true }, function (windows) {
            var existingWindow = null
            for (var i = 0; i < windows.length; i++) {
                var currentWindow = windows[i]
                if (currentWindow.tabs.some((t) => t.url.includes("popup.html"))) {
                    existingWindow = currentWindow
                    break
                }
            }

            if (existingWindow === null) {
                // Popup is not open, so create it.
                chrome.windows.create({
                    url: "popup.html",
                    type: "popup",
                    width: 400,
                    height: 600,
                })
            }
        })
    }

    if (from && from === "event") {
        chrome.runtime.sendMessage({ from: "background", type: "fromBackground", method, params }, (resp) => {
            console.log(resp, "resp in background.js", 11111111)
            resp && sendResponse({ type: "res_external", response: resp.response })
        })
    }
    return true // Will respond asynchronously.
})
