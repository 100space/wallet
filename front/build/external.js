/* eslint-disable no-undef */

// chrome.runtime.sendMessage({ type: "externalScript", data: "Hello from external.js!" }, (response) => {
//     // 응답 처리
//     console.log("백그라운드 스크립트로부터 externalScript 응답 수신:", response)
// })

// window.addEventListener("message", (event) => {
//     if (event.source === window && event.data.type === "myMessageType") {
//         const messageData = event.data.data
//         console.log(messageData)
//         // 메시지 처리 로직 작성
//     }
// })

// window.postMessage(
//     {
//         type: "FROM_PAGE",
//         text: {
//             method: "sendTransaction",
//             data: {
//                 to: "0x123...", // 이 값은 실제 트랜잭션 데이터에 따라 변경되어야 합니다.
//                 value: ethers.utils.parseEther("1.0"), // 1 이더 전송
//             },
//         },
//     },
//     "*"
// )
