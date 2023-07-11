import { PopupBtn } from "@components/MainController/PopupBtn"
import { AssetsList } from "@common/List/AssetsList"
import { INFTCard } from "@utils/interFace/nft.interface"
import { ModeState, MyTokens, MyInfo, MyNetwork, MyAccounts, MyNFT, MyAccountsList } from "@utils/localStorage"
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
    const [myAccount, setMyAccount] = useRecoilState(MyAccounts)
    const [myTokens, setMyTokens] = useRecoilState(MyTokens)
    const [myInfo, setMyInfo] = useRecoilState(MyInfo)
    const [network, setNetwork] = useRecoilState(MyNetwork)
    const [myNft, setMyNft] = useRecoilState(MyNFT)
    const myAccounts = useRecoilValue(MyAccounts)
    const nftin = useNFTin()

    const getMyCoins = async () => {
        if (nftin === null) return null
        const myTokens = myInfo[network as keyof typeof myInfo].tokens
        const result = await Promise.all(
            myTokens.map(async (v) => {
                // const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_MUMBAI_NETWORK)
                const provider = nftin.provider
                console.log(provider)
                const abi = [
                    "function decimals() view returns (string)",
                    "function symbol() view returns (string)",
                    "function balanceOf(address addr) view returns (uint)",
                ]
                // String(v.ca), abi, provider
                const contract = new Contract(String(v.ca), abi, provider)
                const balance = await contract.balanceOf("0xfAD153d059F9dA994F1688b3333f2Fb415682a14")
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
        const { data } = await requestServer.post("market/user", {
            eoa: "0x26A7456A05a3d0b24Ce5e732575FF456571d6Ec5",
        })
        return data
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
        console.log(myAccount)
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
                if (myNftData) {
                    setMyNft([...myNftData])
                }
            }
        }

        fetchData()
    }, [nftin])
    return (
        <>
            <TotalSupply></TotalSupply>
            <PopupBtn></PopupBtn>
            <AssetsList tokenList={myTokens} nftList={myNft} />
            {/* <NFTInfoPage /> */}
            {/* <MyNftInformation /> */}
        </>
    )
}
