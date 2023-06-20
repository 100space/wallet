import { Controller } from "@common/footer"
import { useEffect, useState } from "react"
import { MainRouter } from "routes/MainRouter"
import { Header } from "./common"

import { Footer } from "@components/Footer"
import { ModeState, InitMode } from "@utils/localStorage"
import { useRecoilState, useResetRecoilState } from "recoil"

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
            <Footer />
        </>
    )
}
export default App
