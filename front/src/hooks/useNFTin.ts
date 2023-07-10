import NFTin from "@core/index"
import { MyAccounts } from "@utils/localStorage"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

export const useNFTin = () => {
    const myAccounts = useRecoilValue(MyAccounts)
    const network = process.env.REACT_APP_MUMBAI_NETWORK
    const [nftin, setNftin] = useState<NFTin | null>(null)

    useEffect(() => {
        const nftin = new NFTin(network as string, myAccounts.privateKey)
        setNftin(nftin)
    }, [myAccounts])

    return nftin as NFTin
}
