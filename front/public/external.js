/* eslint-disable no-undef */
chrome.runtime.sendMessage({ type: "externalScript", data: "Hello from external.js!" }, (response) => {
    // 응답 처리
    console.log("백그라운드 스크립트로부터 externalScript 응답 수신:", response)
})

console.log(chrome.runtime.id)
window.addEventListener("message", (event) => {
    if (event.source === window && event.data.type === "myMessageType") {
        const messageData = event.data.data
        console.log(messageData)
        // 메시지 처리 로직 작성
    }
})
