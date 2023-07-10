/* eslint-disable @typescript-eslint/no-useless-constructor */
import { address } from "@utils/interFace/core"
import { Provider, Wallet, ethers } from "ethers"

class MyWallet extends Wallet {
    constructor(privateKey: string, provider: ethers.Provider) {
        super(privateKey, provider)
    }
    async createAccount() {
        const a = Wallet.createRandom()
        const newAccount = {
            privateKey: a.privateKey,
            publicKey: a.publicKey,
            address: a.address,
        }
        return newAccount
    }
}

export default MyWallet
