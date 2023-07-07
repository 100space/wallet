import { ethers } from "ethers"
import MyWallet from "./wallet"
import MyProvider from "./provider"

class NFTin {
    constructor(public readonly provider: MyProvider, public readonly wallet: MyWallet) {}
}
export default NFTin
