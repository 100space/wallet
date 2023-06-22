import { InitStepPage } from "@common/initStep"
import { Button } from "@components/Button/Btn"
import { useGetMode } from "@hooks/useMode"
import { InitMode, IsCheck } from "@utils/localStorage"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { useRecoilState, useResetRecoilState } from "recoil"
import { StepPageWrap } from "./styled"

export const InitPage = () => {
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [modeState, setChange] = useGetMode()
    const currentRef = useRef(null)
    const navigate = useNavigate()

    const handleClick = (step: string) => {
        switch (step) {
            case "step1":
                console.log(isCheck)
                if (!isCheck.step1) return
                return setManageMode({
                    ...manageMode,
                    initStep: "step2",
                })

            case "step2":
                if (!isCheck.step2) return
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
                setManageMode({
                    ...manageMode,
                    initMode: "",
                    initStep: "",
                })
                return navigate("/")
            default:
                break
        }
    }
    useEffect(() => {
        if (manageMode.initMode === "") navigate("/login")
        setManageMode({
            ...manageMode,
            initStep: manageMode.initMode === "create" ? "step1" : manageMode.initMode === "manage" ? "step2" : "step1",
        })
    }, [])

    return (
        <StepPageWrap mode={modeState.mode} ref={currentRef}>
            <InitStepPage />
            <Button
                width={"90%"}
                height={"5.6rem"}
                margin={"0 auto"}
                fontSize={"1.4rem"}
                content={manageMode.initStep === "step4" ? "Let's Start" : "Next Step"}
                mode={modeState.mode}
                onClick={() => handleClick(manageMode.initStep)}
            />
        </StepPageWrap>
    )
}
