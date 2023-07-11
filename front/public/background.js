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

            if (type === "req" && (method === "eth_sendTransaction" || method === "eth_sendRawTransaction")) {
                console.log("팝업 뛰울 때 !!:", type, method, params)
                chrome.windows.create(
                    {
                        url: chrome.runtime.getURL("approve.html"),
                        type: "popup",
                        width: 400,
                        height: 750,
                    },
                    (window) => {
                        const createdTabId = window.tabs[0].id
                        const updateListener = (tabId, changeInfo, tab) => {
                            // 우리가 생성한 탭이 완전히 로드된 상태인 경우에만 메시지를 보냅니다.
                            if (tabId === createdTabId && changeInfo.status === "complete") {
                                chrome.tabs.sendMessage(tabId, { type: method, params })

                                // 메시지를 보낸 후에는 리스너를 제거합니다.
                                chrome.tabs.onUpdated.removeListener(updateListener)
                            }
                        }

                        // 탭의 상태가 업데이트 될 때마다 updateListener 함수를 호출하도록 리스너를 등록합니다.
                        chrome.tabs.onUpdated.addListener(updateListener)
                    }
                )
            }
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
