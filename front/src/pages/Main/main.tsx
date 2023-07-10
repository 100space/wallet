import { PopupBtn } from "@components/MainController/PopupBtn"
import { AssetsList } from "@common/List/AssetsList"
import { ITokenRow } from "@utils/interFace/core"
import { INFTCard, INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ModeState, InitMode, IsCheck, MyProfile, Web3Instance, MyAccounts, MyAccountsList } from "@utils/localStorage"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { useRecoilState, useResetRecoilState } from "recoil"
import { TotalSupply } from "@components/TotalSupply"
import { MyNftInformation } from "@common/Infomation/MyNftInformation"
import { NFTInfoPage } from ".."
// import MyWallet from "@core/wallet"
import myWallet from "@core/wallet"
import myProvider from "@core/provider"
import { BrowserProvider, ethers } from "ethers"
import NFTin from "@core/index"
import MyProvider from "@core/provider"
import { useNFTin } from "@hooks/useNFTin"

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
export const MainPage = () => {
    const navigater = useNavigate()
    const resetAccountList = useResetRecoilState(MyAccountsList)
    const [myAccount, setMyAccount] = useRecoilState(MyAccounts)
    const [initState, setInitState] = useRecoilState(ModeState)
    const nftin = useNFTin()

    useEffect(() => {
        !initState.isLogin && navigater("/login")
        // console.log(myAccounts.privateKrey)
        // console.log(myWallet.createRandom(provider))
        // console.log(wallet.fromEncryptedJson())
        // const nftin = new NFTin(provider, wallet)
        // console.log(
        //     nftin.provider
        //         .send("eth_getBalance", ["0xB5D30137972494dC3EC4Ae9C6955D760B70A01c9", "latest"])
        //         .then((resalt) => {
        //             console.log(ethers.formatEther(resalt))
        //         })
        // )
        // console.log(nftin.wallet.createRandom(provider))
        // console.log(nftin.provider.request({ method: "eth_requestAccounts" }).then(console.log))

        // console.log(wallet.signTransaction({ to: "0x0", value: 0 }))
        console.log(myAccount)

        if (!window.abc) {
            window.abc = nftin
            window.ethers = ethers
        }
    }, [])

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
