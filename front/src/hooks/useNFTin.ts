import NFTin from "@core/index"
import { MyAccounts, MyInfo, MyNetwork } from "@utils/localStorage"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useRecoilValue } from "recoil"

export const useNFTin = () => {
  const myAccounts = useRecoilValue(MyAccounts)
  const myInfo = useRecoilValue(MyInfo)
  const network = useRecoilValue(MyNetwork)
  const netwokeState = `${myInfo[network as keyof typeof myInfo].networks.rpc}${process.env.REACT_APP_INFURA_KEY}`
  const [nftin, setNftin] = useState<NFTin | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    if (myAccounts && myAccounts.privateKey) {
      const nftinIst = new NFTin(netwokeState as string, myAccounts.privateKey)
      setNftin(nftinIst)
    } else {
      navigate("/login")
    }
  }, [myAccounts, netwokeState])
  // nftin === null ? (nftinIst as NFTin) :
  return nftin as NFTin
}
