/* eslint-disable no-undef */
import { ethers } from "ethers"
let checkInterval = setInterval(() => {
    console.log("window object is available!")
    clearInterval(checkInterval)
    if (window) {
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
            console.log("event에서 보내는 메시지 수신:", message)
            const { type, method, params } = message

            window.postMessage({ type, method, params }, "*")

            window.addEventListener("message", (event) => {
                if (event.source !== window) return
                const { type, id, response } = event.data
                console.log("external에서 background로 반환값:", type, id, response)
                if (type === "res" && response) {
                    console.log(event.data)
                    console.log("external에서 온 답장:", type, id, response)
                    sendResponse({ type: "res", id, response })
                }
            })
            return true
        })
    }
}, 1000)
