/* eslint-disable no-undef */

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
;(document.head || document.documentElement).appendChild(s)

window.addEventListener("message", (event) => {
    if (event.source !== window) return
    const { type, id, method, params, from } = event.data
    if (type === "fromClient" && from === "windowproperty") {
        console.log(11111)
        chrome.runtime.sendMessage({ from: "event", type: "fromEvent", method, params }, (resp) => {
            if (resp) {
                console.log(resp, "resp in envet.js")
                window.postMessage({ type: "fromEvent", id, response: resp, from: "windowprovier " }, "*")
            }
        })
        return true
    }
})
