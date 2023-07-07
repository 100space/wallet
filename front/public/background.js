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
    console.log("event에서 보내는 메시지 수신:", message)
    const { type, method, params } = message
    if (type === "req") {
        provider.send(method, params).then((response) => {
            console.log("노드 요청한 곳 :", response)
            sendResponse({ type: "res", response })
        })
    }
    return true
})
