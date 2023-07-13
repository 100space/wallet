/* eslint-disable no-undef */
// external.js
console.log("external.js has been loaded")
let checkInterval = setInterval(() => {
    if (window.abc) {
        console.log("Ethereum object is available!")
        clearInterval(checkInterval) // 지갑이 준비되었으므로 체크를 멈춥니다.
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            const { from, type, method, params } = request
            if (from && from === "background") {
                if ((method === "eth_requestAccounts") | (method === "eth_accounts")) {
                    window.abc.wallet.getAddress().then((address) => {
                        sendResponse({ type: "res_external", response: [address] })
                    })
                } else if (method.includes("eth_")) {
                    let requestMethod = method
                    let params = request.params
                    if (method === "eth_sendTransaction") {
                        // const tx = params[0]
                        // console.log(tx, "tx in external.js")
                        // let signedTx = signAndEncodeTransaction(tx, window.abc.wallet.privateKey)
                        // requestMethod = "eth_sendRawTransaction"
                        // params = [signedTx]
                        window.abc.wallet.sendTransaction(params[0]).then((response) => {
                            // console.log(response)
                            const { hash } = response
                            sendResponse({ type: "res_external", response: hash })
                        })
                    } else {
                        window.abc.provider.send(requestMethod, params).then((response) => {
                            sendResponse({ type: "res_external", response })
                        })
                    }
                }
            }
            return true
        })
    } else {
        console.log("Ethereum object is not available yet.")
    }
}, 1000) // 매 초마다 체크합니다.
