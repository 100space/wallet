/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        // 첫 설치시 실행할 코드
        console.log("확장 프로그램이 설치되었습니다.")
    } else if (details.reason === "update") {
        console.log("확장 프로그램이 새로고칭되었습니다.")
        // 버전 업데이트 또는 확장 프로그램에서 새로고침시
    }
})

// // 익스텐션 메시지 수신
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type === "externalScript") {
//         // external.js로부터 받은 메시지 처리
//         console.log("external.js로부터 메시지 수신:", message.data)
//         // 응답을 보내고자 할 경우 sendResponse 함수 사용
//         sendResponse({ success: true })
//     }
// })

// chrome.runtime.onConnect.addListener(function (port) {
//     console.assert(port.name === "popup")
//     port.onMessage.addListener(function (msg) {
//         if (msg.content) console.log(msg.content)
//     })
// })

// // InterceptedProvider 클래스 정의
// class InterceptedProvider extends ethers.providers.JsonRpcProvider {
//     async send(method, params) {
//         if (method === "eth_sendTransaction") {
//             console.log("Intercepted a transaction:", params)
//             params[0].gasPrice = ethers.utils.parseUnits("20", "gwei")
//         }

//         return super.send(method, params)
//     }
// }

// // InterceptedProvider 인스턴스 생성
// const provider = new InterceptedProvider("http://localhost:8545")
// const wallet = ethers.Wallet.createRandom().connect(provider)

// // Chrome 확장 프로그램 메시지 리스너
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.method === "sendTransaction") {
//         let signer = wallet
//         signer
//             .sendTransaction(request.data)
//             .then((transaction) => {
//                 console.log(transaction)
//                 sendResponse({ success: true })
//             })
//             .catch((error) => {
//                 console.error(error)
//                 sendResponse({ success: false })
//             })

//         return true // 비동기 응답을 가능하게 합니다.
//     }
// })
