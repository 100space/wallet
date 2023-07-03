/* eslint-disable no-undef */
document.body.addEventListener("click", function (e) {
    const port = chrome.runtime.connect({ name: "popup" })
    if (e.target.id === "yourButtonId") {
        let message = { content: "Clicked!" }
        // chrome.runtime.sendMessage(message)
        port.postMessage(message)
    }
})
