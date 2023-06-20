import { Controller } from "@common/footer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"
<<<<<<< HEAD
import { CloseBtn } from "@components/CloseBtn"
import { SubList } from "@components/SettingBtn"
=======
import { recoilPersist } from "recoil-persist"
import { InitMode, ModeState } from "@utils/localStorage"
import { useRecoilState, useResetRecoilState } from "recoil"
>>>>>>> baek

const App = () => {
    const initState = useRecoilState(ModeState)
    const manageMode = useRecoilState(InitMode)
    const modeStateReset = useResetRecoilState(ModeState)
    const InitStepReset = useResetRecoilState(InitMode)

    useEffect(() => {
        if (initState === undefined || manageMode === undefined) {
            modeStateReset()
            InitStepReset()
        }
    }, [initState, manageMode])

    return (
        <>
            <Header />
            <MainRouter />
            <Controller />
        </>
    )
}
export default App
