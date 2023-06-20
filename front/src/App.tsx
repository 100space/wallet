import { Controller } from "@common/footer"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"
import { useGetMode } from "@hooks/useMode"
import { RootWrap } from "./styled"
import { useLocation } from "react-router"
import { Body } from "@common/body"

const App = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const [modeState, setChange] = useGetMode()
    const location = useLocation().pathname
    console.log()
    const changeMode = () => {
        setChange(modeState.mode)
    }
    return (
        <>
            <RootWrap mode={modeState.mode}>
                <Header />
                <Body />
                {location.indexOf("/login") >= 0 ? <></> : <Controller />}
            </RootWrap>

            {screenHeight > 600 && screenWidth > 800 && screenWidth > screenHeight ? (
                <div className="modeChange" onClick={changeMode}>
                    모드 변환
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
export default App
