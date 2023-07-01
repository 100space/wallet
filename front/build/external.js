/* eslint-disable no-undef */
chrome.runtime.sendMessage({ type: "externalScript", data: "Hello from external.js!" }, (response) => {
    // 응답 처리
    console.log("백그라운드 스크립트로부터 externalScript 응답 수신:", response)
})
