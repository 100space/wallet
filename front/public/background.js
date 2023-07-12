/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    const { from, type, method, params } = request
    if (from && from === "event") {
        console.log("windowproperty.js에서 보내는 값:", request.type, request.method, request.params)
        chrome.runtime.sendMessage({ from: "background", type: "fromBackground", method, params }, (resp) => {
            console.log(resp, "external에서 받은 값")
            if (resp) {
                const { response } = resp
                sendResponse({ response }) // 값을 응답으로 보냄
            }
        })
    }
    return true
})
