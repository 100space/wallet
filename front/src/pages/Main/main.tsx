import { PopupBtn } from "@components/MainController/PopupBtn"
import { AssetsList } from "@common/List/AssetsList"
import { ITokenRow } from "@utils/interFace/core"
import { INFTCard, INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ModeState, InitMode, IsCheck, MyAccount, Web3Instance } from "@utils/localStorage"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { TotalSupply } from "@components/TotalSupply"
import { MyNftInformation } from "@common/Infomation/MyNftInformation"
import { NFTInfoPage } from ".."
import MyWallet from "@core/provider"
import Web3 from "web3"

const tokenData: ITokenRow[] = [
    {
        tokenImg: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
        assets: [
            { amount: 10, currency: "BTC" },
            { amount: 3000000000, currency: "KRW" },
        ],
    },
    {
        tokenImg: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880",
        assets: [
            { amount: 54, currency: "ETH" },
            { amount: 35650000, currency: "KRW" },
        ],
    },
    {
        tokenImg: "https://assets.coingecko.com/coins/images/325/thumb/Tether.png?1668148663",
        assets: [
            { amount: 12.4, currency: "USDT" },
            { amount: 124000, currency: "KRW" },
        ],
    },
    {
        tokenImg: "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850",
        assets: [
            { amount: 124, currency: "MATIC" },
            { amount: 1240000, currency: "KRW" },
        ],
    },
    {
        tokenImg: "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
        assets: [
            { amount: 9.4, currency: "USDC" },
            { amount: 19000, currency: "KRW" },
        ],
    },
]
const nftData: INFTCard[] = [
    {
        image: "https://ipfs.io/ipfs/QmT5Mx7RLwZdqLztHkumF4Qq7EyficKcdf972yZyVUF9Hj/9677.jpg",
        prices: [
            { currency: "KRW", price: 360000 },
            { currency: "ETH", price: 0.1 },
        ],
        name: "DigiDaigaku",
        owner: "Char1ey",
    },
    {
        image: "https://ipfs.io/ipfs/QmT5Mx7RLwZdqLztHkumF4Qq7EyficKcdf972yZyVUF9Hj/9679.jpg",
        prices: [
            { currency: "KRW", price: 360000 },
            { currency: "ETH", price: 0.1 },
        ],
        name: "DigiDaigaku",
        owner: "Char1ey",
    },
    {
        image: "https://ipfs.io/ipfs/QmT5Mx7RLwZdqLztHkumF4Qq7EyficKcdf972yZyVUF9Hj/9676.jpg",
        prices: [
            { currency: "KRW", price: 360000 },
            { currency: "ETH", price: 0.1 },
        ],
        name: "DigiDaigaku",
        owner: "Char1ey",
    },
    {
        image: "https://ipfs.io/ipfs/QmT5Mx7RLwZdqLztHkumF4Qq7EyficKcdf972yZyVUF9Hj/9678.jpg",
        prices: [
            { currency: "KRW", price: 360000 },
            { currency: "ETH", price: 0.1 },
        ],
        name: "DigiDaigaku",
        owner: "Char1ey",
    },
]
declare global {
    interface Window {
        ethereum?: any
        MyWallet: MyWallet
    }
}
export const MainPage = () => {
    const navigater = useNavigate()

    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [myAccount, setMyAccount] = useRecoilState(MyAccount)
    const [instance, setInstance] = useRecoilState(Web3Instance)
    // const { myWallet, enable } = useMyWallet()
    useEffect(() => {
        if (!myAccount.password) navigater("/login")
        // const web3 = new Web3()
        // const myWalletInstance = new MyWallet()
        // if (window && web3) {
        //     window.ethereum = [window.ethereum, myWalletInstance.web3.provider]
        //     const use = window["ethereum"][1]
        //     console.log(use)
        //     // use.request({
        //     //     method: "eth_chainId",
        //     // }).then(console.log)
        // }

        const myWalletInstance = new MyWallet()
        console.log(myWalletInstance)
    }, [])
    useEffect(() => {}, [instance])
    return (
        <>
            <TotalSupply></TotalSupply>
            <PopupBtn></PopupBtn>
            <AssetsList tokenList={tokenData} nftList={nftData} />
            {/* <NFTInfoPage /> */}
            {/* <MyNftInformation /> */}
        </>
    )
}
