/* eslint-disable no-undef */

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
;(document.head || document.documentElement).appendChild(s)

window.addEventListener("message", (event) => {
    const { type, id, method, params } = event.data
    if (type === "req") {
        console.log("req")
        console.log("windowproperty.js에서 보내는 값:", type, method, params)

        chrome.runtime.sendMessage({ type, method, params }, (resp) => {
            const { type, id, response } = resp
            console.log(type, id, response, "res")
            if (type === "res" && response) {
                console.log("window:", response)
                window.postMessage({ type, id, response }, "*")
            }
        })
    }
})
//     if (type === "res") {
//         console.log("res")
//         const { type, id, method, params } = event.data
//         // chrome.runtime.sendMessage({ type, method, params }, (response) => {
//         //     if (type === "res" && response) {
//         //         console.log("background.js에서 돌려 받는 결과값:", response)
//         //         window.postMessage({ from: "res", id, response }, "*")
//         //     }
//         // })

//         chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//             console.log("event에서 보내는 메시지 수신:", message)
//             const { type, method, params } = message
//             if (type === "req") {
//                 provider.send(method, params).then((response) => {
//                     console.log("노드 요청한 곳 :", response)
//                     sendResponse({ type: "res", response })
//                 })
//             }
//             return true
//         })
//     }
// })
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
