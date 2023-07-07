/* eslint-disable @typescript-eslint/no-useless-constructor */
import { address } from "@utils/interFace/core"
import { Provider, Wallet, ethers } from "ethers"

class MyWallet extends Wallet {
    constructor(privateKey: string, provider: ethers.Provider) {
        super(privateKey, provider)
    }
    async createAccount() {
        Wallet.createRandom()
        return
    }
}

export default MyWallet
