import { AssetsList } from "@common/List/AssetsList"
import { ITokenRow } from "@utils/interFace/core"
import { INFTCard } from "@utils/interFace/nft.interface"
import { ModeState, InitMode, IsCheck, MyAccount } from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

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
            <AssetsList tokenList={tokenData} nftList={nftData} />
        </>
    )
}
