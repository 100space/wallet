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
// 익스텐션 메시지 수신
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "externalScript") {
        // external.js로부터 받은 메시지 처리
        console.log("external.js로부터 메시지 수신:", message.data)
        // 응답을 보내고자 할 경우 sendResponse 함수 사용
        sendResponse({ success: true })
    }
    if (message.type === "windowProperty") {
        const { method, params } = message.data
        if (method === "eth_requestAccounts" || method === "eth_accounts") {
            if (globalThis.abc && "address" in globalThis.abc) {
                const address = globalThis.abc.address
                if (!address) sendResponse({ address: [] })
                sendResponse({ address })
                return true
            }
        }
        if (method.method === "eth_sendTransaction") {
            if (globalThis.abc && "sendTransaction" in globalThis.abc) {
                let tx = params
                openWallet(tx)
                globalThis.abc.sendTransaction(params[0])
                console.log(globalThis.abc)
                if (tx) sendResponse({ status: "success" })
                return true
            }
        }
        sendResponse({ status: "success" })
        return true
    }
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
