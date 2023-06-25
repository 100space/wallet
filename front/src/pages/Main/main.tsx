import { AccountList } from "@common/List/AccountList"
import { AssetTokenList } from "@common/List/AssetTokenList"
import { TokenRow } from "@components/Tokens"
import { IAccountRow, ITokenRow } from "@utils/interFace/core"
import { ModeState, InitMode, IsCheck, MyAccount } from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

// const AccountRowData: IAccountRow = {
//     accountImg: "https://assets.coingecko.com/coins/images/4463/thumb/WeChat_Image_20220118095654.png?1642471050",
//     address: "0x0320035A0654DDdeD53343E3A23327112aa2e0a3",
//     asset: {currency: "MATIC", amount: 100}
// }

const TokenRowData: ITokenRow = {
    tokenImg: "https://assets.coingecko.com/coins/images/4463/thumb/WeChat_Image_20220118095654.png?1642471050",
    assets: [{currency: "MATIC", amount: 100}, {currency: "KRW", amount: 1206040}]
}

export const MainPage = () => {
    const navigator = useNavigate()
    const [initState, setInitState] = useRecoilState(ModeState)
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [myAccount, setMyAccount] = useRecoilState(MyAccount)

    useEffect(() => {
        console.log(myAccount.myMnemonic)
        if (!myAccount.myMnemonic) navigator("/login")
    }, [])
    
    return (
        <>
            {/* <AccountList accounts={[AccountRowData, AccountRowData, AccountRowData, AccountRowData, AccountRowData]} /> */}
            <AssetTokenList tokens={[TokenRowData, TokenRowData, TokenRowData, TokenRowData]}/>
        </>
    )
}
