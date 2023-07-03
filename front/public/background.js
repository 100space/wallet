/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        // 첫 설치시 실행할 코드
        console.log("확장 프로그램이 설치되었습니다.")
    } else if (details.reason === "update") {
        console.log("확장 프로그램이 새로고칭되었습니다.")
        // 버전 업데이트 또는 확장 프로그램에서 새로고침시
    }
})

// 익스텐션 메시지 수신
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "externalScript") {
        // external.js로부터 받은 메시지 처리
        console.log("external.js로부터 메시지 수신:", message.data)
        // 응답을 보내고자 할 경우 sendResponse 함수 사용
        sendResponse({ success: true })
    }
})

chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name === "popup")
    port.onMessage.addListener(function (msg) {
        if (msg.content) console.log(msg.content)
    })
})
