/* eslint-disable no-undef */
console.log("external.js has been loaded")
let checkInterval = setInterval(() => {
    if (window.abc) {
        console.log("Ethereum object is available!")
        clearInterval(checkInterval) // 지갑이 준비되었으므로 체크를 멈춥니다.
        console.log(window.abc, "window.abc")

        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            const { type, method, params, from } = message
            if (from === "background" && type === " req") {
                console.log("백그라운드에서 보내는 메시지 수신:", message)
            }
            chrome.runtime.sendMessage({ type: "fromExternal", method, params }, (resp) => {
                console.log(resp, "resp", "")
                sendResponse(resp)
            })
            return true
        })

        // external.js
        window.addEventListener("message", async (event) => {
            if (event.source !== window) return
            let { type, params, method } = event.data
            if (type === "req" && window) {
                if (method === "eth_sendTransaction" || method === "eth_sendRawTransaction") {
                    console.log(window.abc.address)
                    const tx = {
                        chainId,
                        nonce: nonce + 1,
                        from: currentAccount,
                        gasPrice: ethers.parseUnits("10000", "gwei"),
                        gasLimit: 3000000n,
                        ...params[0],
                    }
                    console.log(tx)
                    const agree = window.confirm("정말로 전송하시겠습니까?")
                    if (!agree) return
                    const serializedTx = await window.abc.signTransaction(tx)
                    params = [serializedTx]
                    method = "eth_sendRawTransaction"
                    console.log(params, "params")
                }
                if (method === "eth_accounts" || method === "eth_requestAccounts") {
                    console.log(111, method, params)
                    return window.postMessage(
                        { type: "res", id: 0, response: ["0x4db19b0f4C9722900971639158798ab93BF9eB13"] },
                        "*"
                    )
                }
                window.abc.provider.send(method, params).then((res) => {
                    console.log("노드에서 온 답장:", res)
                    window.postMessage({ type: "res", id: 0, response: res }, "*")
                })
                console.log("Content script has sent a message: " + event.data.text)
            }
        })
    } else {
        console.log("Ethereum object is not available yet.")
    }
}, 1000) // 매 초마다 체크합니다.
