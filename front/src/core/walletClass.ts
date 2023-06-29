// import Web3 from "web3"
// // const web3 = new Web3("https://polygon-mumbai.infura.io/v3/fe6fb1e940ac43ea956b72a82103f2ad")

// // console.log(web3.currentProvider)
// // web3.setProvider("https://mainnet.infura.io/v3/fe6fb1e940ac43ea956b72a82103f2ad")

// // console.log(web3.currentProvider)

export class MyWallet {
    constructor() {
        // 내 지갑 초기화 로직
        // this.web3 = new Web3(window.web3.currentProvider)
    }
    //     async enable() {
    //         // 내 지갑 활성화 로직
    //         if (window.web3) {
    //             try {
    //                 await window.web3.currentProvider.enable()
    //             } catch (error) {
    //                 console.error("Failed to enable wallet:", error)
    //                 throw error
    //             }
    //         } else {
    //             throw new Error("No web3 provider found")
    //         }
    //     }
    //     async sendTransaction(transactionObject: any) {
    //         // 트랜잭션 전송 로직
    //         if (window.web3) {
    //             try {
    //                 const result = await this.web3.eth.sendTransaction(transactionObject)
    //                 return result
    //             } catch (error) {
    //                 console.error("Failed to send transaction:", error)
    //                 throw error
    //             }
    //         } else {
    //             throw new Error("No web3 provider found")
    //         }
    //     }
    //     async getAccounts() {
    //         // 계정 정보 조회 로직
    //         if (window.web3) {
    //             try {
    //                 const accounts = await this.web3.eth.getAccounts()
    //                 return accounts
    //             } catch (error) {
    //                 console.error("Failed to get accounts:", error)
    //                 throw error
    //             }
    //         } else {
    //             throw new Error("No web3 provider found")
    //         }
    //     }
    //     async sign(message) {
    //         // 메시지 서명 로직
    //         if (window.web3) {
    //             try {
    //                 const accounts = await this.getAccounts()
    //                 const result = await this.web3.eth.personal.sign(message, accounts[0])
    //                 return result
    //             } catch (error) {
    //                 console.error("Failed to sign message:", error)
    //                 throw error
    //             }
    //         } else {
    //             throw new Error("No web3 provider found")
    //         }
    //     }
    //     // 추가 내 지갑 기능 및 로직
}

// // // 내 지갑 앱을 초기화하고 window.ethereum에 추가
// // const myWallet = new MyWallet()
// // window.ethereum.myWallet = myWallet
