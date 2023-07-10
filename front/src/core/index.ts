import { ethers } from "ethers"
import MyWallet from "./wallet"
import MyProvider from "./provider"

export default class NFTin {
    public provider: MyProvider
    public wallet: MyWallet

    constructor(network: string, privateKey: string) {
        this.provider = new MyProvider(network)
        this.wallet = new MyWallet(privateKey, this.provider)
    }

    public async request(method: string, params: any[]): Promise<any> {
        switch (method) {
            case "eth_sendTransaction":
                const [tx] = params
                console.log(tx)
                const txResponse = await this.provider.send("eth_sendRawTransaction", [tx])
                return txResponse

            // Add more cases to handle other JSON-RPC methods as needed

            default:
                throw new Error(`Unsupported method: ${method}`)
        }
    }
    public async sendTransaction(tx: any): Promise<any> {
        const a = await this.provider.getBalance(tx.from)
        console.log(ethers.formatEther(a))
        const txResponse = await this.wallet.sendTransaction(tx)
        return txResponse
    }
}
