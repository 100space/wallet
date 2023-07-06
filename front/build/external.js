/* eslint-disable no-undef */
chrome.runtime.sendMessage({ type: "externalScript", data: "Hello from external.js!" }, (response) => {
    // 응답 처리
    console.log("백그라운드 스크립트로부터 externalScript 응답 수신:", response)
})

window.addEventListener("message", (event) => {
    if (event.source === window && event.data.type === "myMessageType") {
        const messageData = event.data.data
        console.log(messageData)
        // 메시지 처리 로직 작성
    }
})

window.addEventListener("message", function (event) {
    // We only accept messages from ourselves
    console.log(event.source)
    if (event.source !== window) return

    if (event.data.direction && event.data.direction === "from-page") {
        console.log("Message from the webpage: ", event.data.message)
    }
})
