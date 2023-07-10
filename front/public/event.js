/* eslint-disable no-undef */

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
;(document.head || document.documentElement).appendChild(s)

window.addEventListener("message", (event) => {
    if (event.data.type === "req") {
        const { type, id, method, params } = event.data
        console.log("windowproperty.js에서 보내는 값:", type, method, params)

        chrome.runtime.sendMessage({ type, method, params }, (response) => {
            if (type === "rep" && response) {
                console.log("window:", response)
                window.postMessage({ from: "res", id, response }, "*")
            }
        })
    }
    if (event.data.type === "res") {
        const { type, id, method, params } = event.data
        chrome.runtime.sendMessage({ type, method, params }, (response) => {
            if (type === "res" && response) {
                console.log("background.js에서 돌려 받는 결과값:", response)
                window.postMessage({ from: "res", id, response }, "*")
            }
        })
    }
})
// background script로부터 메시지를 수신하여 window.abc 객체를 설정합니다.
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "setWindowABC") {
//         window.abc = {
//             request: function (method, params) {
//                 console.log("windowproperty.js에서의 메시지:", method, params)
//                 window.postMessage({ from: "WindowObj", method, params }, "*")
//             },
//         }
//         console.log("window.abc 객체가 설정되었습니다.")
//     }
// })
