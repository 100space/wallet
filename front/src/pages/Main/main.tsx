import { PopupComp } from "@components/bottomSheet"
import { PopupBtn } from "@components/MainController/PopupBtn"
import { AssetsList } from "@common/List/AssetsList"
import { ITokenRow } from "@utils/interFace/core"
import { INFTCard, INFTStandard, INFTStauts, INftInfomation } from "@utils/interFace/nft.interface"
import { ModeState, InitMode, IsCheck, MyAccount } from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { TotalSupply } from "@components/TotalSupply"
import { IBlockRow } from "@utils/interFace/block.interface"

const tokenData: ITokenRow[] = [{ tokenImg: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579", assets: [{ amount: 10, currency: "BTC" }, { amount: 3000000000, currency: "KRW" }] }, { tokenImg: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880", assets: [{ amount: 54, currency: "ETH" }, { amount: 35650000, currency: "KRW" }] }, { tokenImg: "https://assets.coingecko.com/coins/images/325/thumb/Tether.png?1668148663", assets: [{ amount: 12.4, currency: "USDT" }, { amount: 124000, currency: "KRW" }] }, { tokenImg: "https://assets.coingecko.com/coins/images/825/thumb/bnb-icon2_2x.png?1644979850", assets: [{ amount: 124, currency: "MATIC" }, { amount: 1240000, currency: "KRW" }] }, { tokenImg: "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389", assets: [{ amount: 9.4, currency: "USDC" }, { amount: 19000, currency: "KRW" }] }]
const nftData: INFTCard[] = [{
    image: "https://assets.coingecko.com/nft_contracts/images/2736/small/redacted-remilio-babies.?1674465796",
    prices: [{currency: "KRW", price: 360000}, {currency: "ETH", price: 0.1}],
    name: "DigiDaigaku",
    owner: "Char1ey"
},{
    image: "https://assets.coingecko.com/nft_contracts/images/2736/small/redacted-remilio-babies.?1674465796",
    prices: [{currency: "KRW", price: 360000}, {currency: "ETH", price: 0.1}],
    name: "DigiDaigaku",
    owner: "Char1ey"
},{
    image: "https://assets.coingecko.com/nft_contracts/images/2736/small/redacted-remilio-babies.?1674465796",
    prices: [{currency: "KRW", price: 360000}, {currency: "ETH", price: 0.1}],
    name: "DigiDaigaku",
    owner: "Char1ey"
},{
    image: "https://assets.coingecko.com/nft_contracts/images/2736/small/redacted-remilio-babies.?1674465796",
    prices: [{currency: "KRW", price: 360000}, {currency: "ETH", price: 0.1}],
    name: "DigiDaigaku",
    owner: "Char1ey"
}]

const blockData: IBlockRow[] = [{
    blockNumber: 17562089,
    blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4"
},{
    blockNumber: 17562088,
    blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4"
},{
    blockNumber: 17562087,
    blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4"
},{
    blockNumber: 17562086,
    blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4"
},{
    blockNumber: 17562085,
    blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4"
},{
    blockNumber: 17562084,
    blockHash: "0x664b309cdedb2c0045e9a7fce8866080dd54e984d8e97cc76f01e0980db6b5f4"
}]

export const MainPage = () => {
    const navigator = useNavigate()
    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [myAccount, setMyAccount] = useRecoilState(MyAccount)
    useEffect(() => {
        if (!myAccount.myMnemonic && !myAccount.nickName && !myAccount.password) navigator("/login")
    }, [])
    return (
        <>
            {/* <TotalSupply></TotalSupply>
            <PopupBtn></PopupBtn>
            <AssetsList tokenList={tokenData} nftList={nftData} />
            <PopupComp></PopupComp> */}
            {/* <PopupWrapper>123123</PopupWrapper> */}
            {/* <PopupComp></PopupComp> */}
            {/* <AssetsList tokenList={tokenData} nftList={nftData} /> */}
            {/* <BlockList blocks={blockData} /> */}
            {/* <MyNftInformation /> */}
        </>
    )
}
