/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, "request in background.js")
    if (request.from && request.from === "event") {
        console.log("req")
        console.log("windowproperty.js에서 보내는 값:", request.type, request.method, request.params)
    }
    sendResponse({ type: "res", id: request.id, response: "background" })
    return true
})

console.log(3)
