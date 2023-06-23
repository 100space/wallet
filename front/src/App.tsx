import { Controller } from "@common/footer"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"
import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { Body } from "@common/body"

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
            </RootWrap>
        </>
    )
}
export default App
