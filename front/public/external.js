/* eslint-disable no-undef */
console.log("external.js has been loaded")
let checkInterval = setInterval(() => {
    if (window.abc) {
        console.log("Ethereum object is available!")
        clearInterval(checkInterval) // 지갑이 준비되었으므로 체크를 멈춥니다.
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            const { from, type, method, params } = request
            if (from && from === "background") {
                if (method === "eth_requestAccounts") {
                    window.abc.wallet.getAddress().then((address) => {
                        sendResponse({ type: "res_external", response: [address] })
                    })
                }
                if (method === "eth_chainId") {
                    window.abc.provider.send(method).then((chainId) => {
                        sendResponse({ type: "res_external", response: chainId })
                    })
                }
            }
            return true
        })
    } else {
        console.log("Ethereum object is not available yet.")
    }
}, 1000) // 매 초마다 체크합니다.
