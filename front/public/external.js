/* eslint-disable no-undef */
// external.js

console.log("external.js has been loaded")

let checkInterval = setInterval(() => {
    if (window.abc) {
        console.log("Ethereum object is available!")
        clearInterval(checkInterval) // 지갑이 준비되었으므로 체크를 멈춥니다.

        chrome.runtime.onConnect.addListener(function (port) {
            console.assert(port.name === "port-from-bg")
            console.log(port, "port in external.js")
            port.onMessage.addListener((request) => {
                const { from, type, method, params } = request
                console.log(request, "request in external.js")
                if (from && from === "background") {
                    if ((method === "eth_requestAccounts") | (method === "eth_accounts")) {
                        window.abc.wallet.getAddress().then((address) => {
                            port.postMessage({ from: "external", type: "res_external", response: [address] })
                        })
                    } else if (method.includes("eth_")) {
                        let requestMethod = method
                        let params = request.params
                        if (method === "eth_sendTransaction") {
                            window.abc.wallet.sendTransaction(params[0]).then((response) => {
                                const { hash } = response
                                port.postMessage({ from: "external", type: "res_external", response: hash })
                            })
                        } else {
                            window.abc.provider.send(requestMethod, params).then((response) => {
                                port.postMessage({ from: "external", type: "res_external", response })
                            })
                        }
                    }
                }
            })
        })
    } else {
        console.log("Ethereum object is not available yet.")
    }
}, 1000) // 매 초마다 체크합니다.
