import { AccountList } from "@common/List/AccountList"
import { AssetsList } from "@common/List/AssetsList"
import { TokenRow } from "@components/Tokens"
import { IAccountRow, ITokenRow } from "@utils/interFace/core"
import { INFTCard } from "@utils/interFace/nft.interface"
import { ModeState, InitMode, IsCheck, MyAccount } from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

// const AccountRowData: IAccountRow = {
//     accountImg: "https://assets.coingecko.com/coins/images/4463/thumb/WeChat_Image_20220118095654.png?1642471050",
//     address: "0x0320035A0654DDdeD53343E3A23327112aa2e0a3",
//     asset: {currency: "MATIC", amount: 100}
// }

const tokenRowData: ITokenRow = {
    tokenImg: "https://assets.coingecko.com/coins/images/4463/thumb/WeChat_Image_20220118095654.png?1642471050",
    assets: [{currency: "MATIC", amount: 100}, {currency: "KRW", amount: 1206040}]
}

const nftCardData: INFTCard = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [
        { currency: "KRW", price: 4500 },
        { currency: "ETH", price: 0.0005 },
    ],
}

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
            {/* <AccountList accounts={[AccountRowData, AccountRowData, AccountRowData, AccountRowData, AccountRowData]} /> */}
            <AssetsList list={[tokenRowData, tokenRowData, tokenRowData, tokenRowData]}/>
            {/* <AssetsList list={[nftCardData, nftCardData, nftCardData, nftCardData]}/> */}
        </>
    )
}
