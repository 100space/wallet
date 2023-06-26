import { PopupComp } from "@components/bottomSheet"
import QRCodeGenerator from "@components/QR/QrCode"
import { Popup } from "@components/popup/Popup"
import { ModeState, InitMode, IsCheck, MyAccount } from "@utils/localStorage"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"

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
            {/* <PopupWrapper>123123</PopupWrapper> */}
            <PopupComp></PopupComp>
        </>
    )
}
