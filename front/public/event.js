/* eslint-disable no-undef */
document.body.addEventListener("click", function (e) {
    const port = chrome.runtime.connect({ name: "popup" })
    if (e.target.id === "yourButtonId") {
        let message = { content: "Clicked!" }
        // chrome.runtime.sendMessage(message)
        port.postMessage(message)
    }
})

window.addEventListener(
    "message",
    function (event) {
        // We only accept messages from ourselves
        if (event.source !== window) return

        if (event.data.type && event.data.type === "FROM_PAGE") {
            console.log("Content script received: ", event.data.text)
            chrome.runtime.sendMessage(event.data.text, function (response) {
                console.log(response)
            })
        }
    },
    false
)
