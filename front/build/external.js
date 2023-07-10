/* eslint-disable no-undef */
console.log("external.js has been loaded")
const sendMessage = (data) => {
    chrome.runtime.sendMessage({ type: "externalScript", data }, (response) => {
        // 응답 처리
        console.log("백그라운드 스크립트로부터 externalScript 응답 수신:", response)
    })
}

const openWallet = (tx) => {
    console.log("openWallet", tx)
    chrome.windows.create({ url: "approve.html", type: "popup", height: 600, width: 400 }, (win) => {
        if (win) {
            chrome.runtime.sendMessage({
                type: "TRANSACTION_DATA",
                data: tx,
            })
            console.log("success")
        } else {
            console.log("error")
        }
    })
}

// external.js
window.addEventListener("message", (event) => {
    console.log(111111)
    if (event.source !== window) return
    if (event.data.type === "req" || event.data.type === "res") {
        console.log("Content script has sent a message: " + event.data.text)
    }
})

let checkInterval = setInterval(() => {
    if (window.abc) {
        console.log(window.abc, "window.abc")
        console.log("Ethereum object is available!")
        clearInterval(checkInterval) // 지갑이 준비되었으므로 체크를 멈춥니다.
    } else {
        console.log("Ethereum object is not available yet.")
    }
}, 1000) // 매 초마다 체크합니다.
