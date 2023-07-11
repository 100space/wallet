/* eslint-disable no-undef */

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
;(document.head || document.documentElement).appendChild(s)

window.addEventListener("message", (event) => {
    if (event.source !== window) return
    const { type, id, method, params } = event.data
    if (event.data.from && event.data.from === "windowproperty") {
        console.log("req")
        console.log("windowproperty.js에서 보내는 값:", type, method, params)

        chrome.runtime.sendMessage({ from: "content", type: "fromEvent", method, params }, (resp) => {
            const { type, id, response } = resp
            console.log(type, id, response, "res")
            if (type === "res" && response) {
                console.log("window:", response)
                window.postMessage({ type, id, response }, "*")
            }
            sendResponse(resp)
        })
        return true
    }
})
