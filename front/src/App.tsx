import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { Body } from "@common/body"
import { Header } from "@common/header"
import { Controller } from "@common/Footer"
import { PopupComp } from "@components/bottomSheet"
import { useNavigate } from "react-router"
import { useEffect } from "react"

const App = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const [modeState, setChange] = useGetMode()
    const navigator = useNavigate()
    const changeMode = () => {
        setChange(modeState.mode)
    }
    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        location.pathname === "/popup.html" && !modeState.isLogin && navigator("/login")
    }, [])

    return (
        <>
            <RootWrap mode={modeState.mode}>
                <Header />
                <Body />
                <Controller />
                <PopupComp />
            </RootWrap>
        </>
    )
}
export default App
