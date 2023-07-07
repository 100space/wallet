import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { Body } from "@common/body"
import { Header } from "@common/header"
import { Controller } from "@common/Footer"
import { PopupComp } from "@components/bottomSheet"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { Scanner } from "@components/PopupItem/QR/scanner"
import { useRecoilState, useRecoilValue } from "recoil"
import { IsPopUp, ScanOpen } from "@utils/localStorage"
import { MyNftInformation } from "@common/Infomation/MyNftInformation"

const App = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const [modeState, setChange] = useGetMode()
    const scanOpen = useRecoilValue(ScanOpen)
    const navigator = useNavigate()
    const changeMode = () => {
        setChange(modeState.mode)
    }
    const [isOpen, setOpen] = useRecoilState(IsPopUp)
    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        ;(location.pathname === "/popup.html" || location.pathname === "/") && !modeState.isLogin && navigator("/login")
    }, [])

    return (
        <>
            <RootWrap mode={modeState.mode}>
                <Header />
                <Body />
                <Controller />
                <PopupComp />
                {scanOpen && <Scanner />}
            </RootWrap>
        </>
    )
}
export default App
