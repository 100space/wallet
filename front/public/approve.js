/* eslint-disable no-undef */
// document.addEventListener("DomContentLoaded", () => {
console.log("DOM fully loaded and parsed")
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if ((request.tabId, request.from === "background")) {
        console.log(request) // request { message, type}
        if (request.method === "eth_sendTransaction" || request.method === "eth_sendRawTransaction") {
            console.log(request.params)
            document.getElementById("transactionData").innerHTML = request.params[0].data
        }
    }
})

const sendMsg = (type, data) => {
    chrome.runtime.sendMessage({ type, data }, (response) => {
        console.log(response)
    })
}

document.getElementById("approveButton").addEventListener("click", () => {
    let transactionParams = window.transactionParams
    sendMsg("signAndSendTransaction", transactionParams)
    console.log("Transaction approved!")
    window.close()
})

document.getElementById("rejectButton").addEventListener("click", () => {
    sendMsg("transactionRejected", {})
    console.log("Transaction rejected!")
    window.close()
})
// })
