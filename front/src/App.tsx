import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { Body } from "@common/body"
import { Header } from "@common/header"
import { Controller } from "@common/Footer"
import { PopupComp } from "@components/bottomSheet"

const App = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const [modeState, setChange] = useGetMode()

    const changeMode = () => {
        setChange(modeState.mode)
    }
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
