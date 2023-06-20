import { InitStepPage } from "@common/initStep"
import { Button } from "@components/Button/Btn"
import { useGetMode } from "@hooks/useMode"
import { InitMode } from "@utils/localStorage"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { StepPageWrap } from "./styled"

export const InitPage = () => {
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [modeState, setChange] = useGetMode()
    console.log(manageMode, 1111)

    useEffect(() => {
        setManageMode({
            ...manageMode,
            initStep: manageMode.initMode === "create" ? "step1" : "step2",
        })
    }, [])
    return (
        <StepPageWrap mode={modeState.mode}>
            <InitStepPage />
            <Button
                width={"100%"}
                height={"5.6rem"}
                margin={"3rem auto 1rem"}
                content={"Next Step"}
                mode={modeState.mode}
            />
        </StepPageWrap>
    )
}
