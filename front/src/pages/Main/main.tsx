import { PopupBtn } from "@components/MainController/PopupBtn"
import { AssetsList } from "@common/List/AssetsList"
import { INFTCard } from "@utils/interFace/nft.interface"
import {
  ModeState,
  MyTokens,
  MyInfo,
  MyNetwork,
  MyAccounts,
  MyNFT,
  MyAccountsList,
  IsPopUp,
  IsSideBar,
} from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { TotalSupply } from "@components/TotalSupply"
import MyWallet from "@core/provider"
import requestServer from "@utils/axios/requestServer"
import { useQueries, useQuery } from "@tanstack/react-query"
import { Contract, ethers } from "ethers"
import { useNFTin } from "@hooks/useNFTin"

declare global {
  interface Window {
    ethereum?: any
    MyWallet: MyWallet
  }
}
export const MainPage = () => {
  const [initState, setInitState] = useRecoilState(ModeState)
  const navigater = useNavigate()
  !initState.isLogin && navigater("/login")
  const resetPopup = useResetRecoilState(IsPopUp)
  const [myTokens, setMyTokens] = useRecoilState(MyTokens)
  const [myInfo, setMyInfo] = useRecoilState(MyInfo)
  const [network, setNetwork] = useRecoilState(MyNetwork)
  const [myNft, setMyNft] = useRecoilState(MyNFT)
  const myAccounts = useRecoilValue(MyAccounts)
  const nftin = useNFTin()

  const getMyCoins = async () => {
    if (nftin === null) return null
    const myCoins = myInfo[network as keyof typeof myInfo].tokens
    console.log(myCoins, 2)
    const result = await Promise.all(
      myCoins.map(async (v: any) => {
        // const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_MUMBAI_NETWORK)
        const provider = nftin.provider
        const abi = [
          "function decimals() view returns (string)",
          "function symbol() view returns (string)",
          "function balanceOf(address addr) view returns (uint)",
        ]
        // String(v.ca), abi, provider

        const contract = new Contract(String(v.ca), abi, provider)
        const balance = await contract.balanceOf(myAccounts.address)
        const amount = ethers.formatEther(balance)
        return { symbol: v.symbol, amount: Number(amount) }
      })
    )
    const { data } = await requestServer.post("trends/tokens", {
      tokens: result,
    })
    return data
  }

  const getMyNft = async () => {
    if (nftin === null) return null
    console.log(myNft)
    const { data } = await requestServer.post("market/user", {
      eoa: myAccounts.address,
    })
    return [...myNft, ...data]
  }
  const results = useQueries({
    queries: [
      {
        queryKey: ["post", "myTokens"],
        queryFn: getMyCoins,
        onSuccess: (data: any) => {
          setMyTokens([...data])
        },
        refetchOnWindowFocus: true,
      },
      {
        queryKey: ["post", "myNFTs"],
        queryFn: getMyNft,
        onSuccess: (data: any) => {
          setMyNft([...data])
        },
        refetchOnWindowFocus: true,
      },
    ],
  })

  useEffect(() => {
    !initState.isLogin && navigater("/login")
    if (!window.abc) {
      window.abc = nftin
      window.ethers = ethers
    }
    const fetchData = async () => {
      if (nftin) {
        const myAssetData = await getMyCoins()

        const myNftData = await getMyNft()
        if (myAssetData) {
          setMyTokens([...myAssetData])
        }
        console.log(myTokens, 123123123)
        if (myNftData) {
          setMyNft([...myNftData])
        }
      }
    }

    fetchData()
    return () => {
      resetPopup()
    }
  }, [nftin, myInfo, network])
  return (
    <>
      <TotalSupply></TotalSupply>
      <PopupBtn></PopupBtn>
      <AssetsList tokenList={myTokens} nftList={myNft} />
    </>
  )
}
