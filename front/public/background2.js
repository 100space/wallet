/* eslint-disable no-undef */
import { ethers } from "ethers"
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { type, method, params, from } = message
    if (from === "content" && (method === "eth_sendTransaction" || method === "eth_sendRawTransaction")) {
        // chrome.windows.create(
        //     {
        //         url: chrome.runtime.getURL("approve.html"),
        //         type: "popup",
        //         width: 400,
        //         height: 750,
        //     },
        //     (window) => {
        //         const createdTabId = window.tabs[0].id
        //         const updateListener = (tabId, changeInfo, tab) => {
        //             // 우리가 생성한 탭이 완전히 로드된 상태인 경우에만 메시지를 보냅니다.
        //             if (tabId === createdTabId && changeInfo.status === "complete") {
        //                 chrome.tabs.sendMessage(tabId, { type: method, params, from: "background" })
        //                 // 메시지를 보낸 후에는 리스너를 제거합니다.
        //                 chrome.tabs.onUpdated.removeListener(updateListener)
        //             }
        //         }
        //         // 탭의 상태가 업데이트 될 때마다 updateListener 함수를 호출하도록 리스너를 등록합니다.
        //         chrome.tabs.onUpdated.addListener(updateListener)
        //         sendResponse({ status: "success" })
        //     }
        // )
        // return true
    } else {
        chrome.runtime.sendMessage({ from: "background", method, params, type: "req" }, (resp) => {
            sendResponse(resp)
        })
        return true
    }

    // if (type === "res" && response) {
    //     console.log("external에서 온 답장:", type, response)
    //     sendResponse({ type: "res", id, response })
    // }

    return true
})
