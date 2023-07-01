/* eslint-disable no-undef */
document.body.addEventListener("click", function (e) {
    const port = chrome.runtime.connect({ name: "popup" })
    // 원하는 버튼을 클릭했을 때만 이벤트 발생
    if (e.target.id === "yourButtonId") {
        // 'yourButtonId'를 실제 원하는 버튼의 ID로 교체합니다.
        let message = { content: "Clicked!" }
        // chrome.runtime.sendMessage(message)
        port.postMessage(message)
    }
})
