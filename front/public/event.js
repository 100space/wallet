/* eslint-disable no-undef */
//event.js

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
;(document.head || document.documentElement).appendChild(s)

window.addEventListener("message", (event) => {
    if (event.source !== window) return
    const { type, id, method, params, from } = event.data
    if (type === "fromClient" && from === "windowproperty") {
        chrome.runtime.sendMessage({ from: "event", type: "fromEvent", method, params }, (resp) => {
            console.log(resp, "resp in envet.js", 11111111)
            // window.postMessage({ type: "fromEvent", id, response: resp.response, from: "event" }, "*")
        })
    }
})
