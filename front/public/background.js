/* eslint-disable no-undef */
import { ethers } from "ethers"

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        // 첫 설치시 실행할 코드
        console.log("확장 프로그램이 설치되었습니다.")
    } else if (details.reason === "update") {
        console.log("확장 프로그램이 새로고칭되었습니다.")
        // 버전 업데이트 또는 확장 프로그램에서 새로고침시
    }
})
// const provider = new ethers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/fe6fb1e940ac43ea956b72a82103f2ad")
const signer = new ethers.Transaction()
console.log(signer, "ethers")
// 익스텐션 메시지 수신
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const provider = new ethers.BrowserProvider(window.abc)
    console.log(provider, "provider")
    console.log("event에서 보내는 메시지 수신:", message)
    const { type, method, params } = message
    if (type === "req") {
        provider.send(method, params).then((response) => {
            console.log("노드 요청한 곳 :", response)
            sendResponse({ from: "res", response })
        })
    }
    return true
})
const openWallet = (tx) => {
    console.log("openWallet", tx)
    chrome.windows.create({ url: "approve.html", type: "popup", height: 600, width: 400 }, (win) => {
        if (win) {
            chrome.runtime.sendMessage({
                type: "TRANSACTION_DATA",
                data: tx,
            })
            console.log("success")
        } else {
            console.log("error")
        }
    })
}
