/* eslint-disable no-undef */
// import { ethers } from "ethers"

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
;(document.head || document.documentElement).appendChild(s)

window.addEventListener("message", (event) => {
    if (event.source === window && event.data.from === "ClientPage") {
        const { method, params, id } = event.data
        console.log("data", method, params)
        chrome.runtime.sendMessage({ type: "windowProperty", method, params }, (response) => {
            console.log("background.js에서 돌려 받는 결과값:", response)
            window.postMessage({ from: "responseAccount", id, response }, "*")
        })
    }
})
// background script로부터 메시지를 수신하여 window.abc 객체를 설정합니다.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "setWindowABC") {
        window.abc = {
            request: function (method, params) {
                console.log("windowproperty.js에서의 메시지:", method, params)
                window.postMessage({ from: "WindowObj", method, params }, "*")
            },
        }
        console.log("window.abc 객체가 설정되었습니다.")
    }
})
