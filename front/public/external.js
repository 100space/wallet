/* eslint-disable no-undef */
console.log("external.js has been loaded")
let checkInterval = setInterval(() => {
    if (window.abc) {
        console.log("Ethereum object is available!")
        clearInterval(checkInterval) // 지갑이 준비되었으므로 체크를 멈춥니다.
        console.log(window.abc, "window.abc")

        console.log(3)
    } else {
        console.log("Ethereum object is not available yet.")
    }
}, 1000) // 매 초마다 체크합니다.
