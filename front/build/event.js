/* eslint-disable no-undef */
document.body.addEventListener("click", function (e) {
    const port = chrome.runtime.connect({ name: "popup" })
    if (e.target.id === "yourButtonId") {
        let message = { content: "Clicked!" }
        // chrome.runtime.sendMessage(message)
        port.postMessage(message)
    }
})

// 스크립트를 생성합니다.
let script = document.createElement("script")

// 스크립트의 내용을 정의합니다. 이것은 웹 페이지의 JavaScript 컨텍스트에서 실행됩니다.
script.textContent = `
  window.postMessage({ direction: "from-page", message: "Hello from the webpage!" }, "*");
`

// 스크립트를 DOM에 주입합니다.
;(document.head || document.documentElement).appendChild(script)

// 사용이 끝난 후에는 스크립트를 DOM에서 제거합니다.
script.remove()
