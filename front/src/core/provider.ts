/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ethers } from "ethers"

class MyProvider extends ethers.JsonRpcProvider {
    constructor(url: string) {
        super(url)
    }

    async request({ method, params }: { method: string; params?: any[] }): Promise<any> {
        if (!params) {
            params = []
        }
        return super.send(method, params)
    }
}
export default MyProvider
