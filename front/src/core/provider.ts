import { ethers } from "ethers"
import Web3, { WebSocketProvider } from "web3"

class MyWallet {
    // web3
    ethers
    // nftin = new Web3(new HttpProvider("http://127.0.0.1:3000")).currentProvider
    constructor() {
        // this.web3 = new Web3()
        this.ethers = ethers
    }
    // enable() {
    //     const a = this.web3?.connect
    //     return a
    // }
    // currentProvider() {
    //     const currentProvider = this.web3
    //     return currentProvider
    // }
}
export default MyWallet
