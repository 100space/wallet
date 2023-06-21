import { InitStepPage } from "@common/initStep"
import { Button } from "@components/Button/Btn"
import { useGetMode } from "@hooks/useMode"
import { InitMode } from "@utils/localStorage"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { StepPageWrap } from "./styled"

export const InitPage = () => {
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [modeState, setChange] = useGetMode()
    const currentRef = useRef(null)
    const navigate = useNavigate()

    const handleClick = (step: string) => {
        switch (step) {
            case "step1":
                return setManageMode({
                    ...manageMode,
                    initStep: "step2",
                })
            case "step2":
                return setManageMode({
                    ...manageMode,
                    initStep: "step3",
                })
            case "step3":
                return setManageMode({
                    ...manageMode,
                    initStep: "step4",
                })
            case "step4":
                navigate("/")
                return setManageMode({
                    ...manageMode,
                    initStep: "",
                })
            default:
                break
        }
    }
    useEffect(() => {
        setManageMode({
            ...manageMode,
            initStep: manageMode.initMode === "create" ? "step1" : "step2",
        })
    }, [])
    return (
        <StepPageWrap mode={modeState.mode} ref={currentRef}>
            <InitStepPage />
            <Button
                width={"100%"}
                height={"5.6rem"}
                margin={"3rem auto 1rem"}
                content={"Next Step"}
                mode={modeState.mode}
                onClick={() => handleClick(manageMode.initStep)}
            />
        </StepPageWrap>
    )
}
