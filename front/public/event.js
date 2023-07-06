/* eslint-disable no-undef */
// import { ethers } from "ethers"

const s = document.createElement("script")
s.src = chrome.runtime.getURL("windowproperty.js")
// const etherCDNScript = document.createElement("script")
// etherCDNScript.src = "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.6.2/ethers.umd.min.js"
// etherCDNScript.integrity =
//     "sha512-j9myusIW7/IPoX4VILcQXXYXqjI8j/Z6ReG8zJqI1tdw6ehOHT2DZ7h2iQm81fraokBmz130iVaOXEA2GL51Pw=="
// etherCDNScript.crossOrigin = "anonymous"
// etherCDNScript.referrerPolicy = "no-referrer"
// ;(document.head || document.documentElement).appendChild(etherCDNScript)
;(document.head || document.documentElement).appendChild(s)

// console.log(ethers)

window.addEventListener("message", (event) => {
    if (event.source === window && event.data.from === "clientPage") {
        console.log(1, event.data)
        const data = {
            method: event.data.method,
            params: event.data.params,
        }
        chrome.runtime.sendMessage({ type: "windowProperty", data }, (response) => {
            console.log("background.js에서의 응답:", response)
        })
    }
})
// background script로부터 메시지를 수신하여 window.abc 객체를 설정합니다.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "setWindowABC") {
        window.abc = {
            request: function (method, params) {
                console.log("windowproperty.js에서의 메시지:", method, params)
                window.postMessage({ from: "clientPage", method, params }, "*")
            },
        }
        console.log("window.abc 객체가 설정되었습니다.")
    }
})
