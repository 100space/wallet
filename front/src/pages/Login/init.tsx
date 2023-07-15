import { InitStepPage } from "@common/initStep"
import { Alert } from "@components/Alert/alert"
import { Button } from "@components/Button/Btn"
import { useGetMode } from "@hooks/useMode"
import { InitMode, IsCheck, MyProfile } from "@utils/localStorage"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { StepPageWrap } from "./styled"

export const InitPage = () => {
    const [manageMode, setManageMode] = useRecoilState(InitMode)
    const isCheck = useRecoilValue(IsCheck)
    const resetIsCheck = useResetRecoilState(IsCheck)
    const resetMyAccount = useResetRecoilState(MyProfile)
    const resetLoginMode = useResetRecoilState(InitMode)
    const [modeState, setChange] = useGetMode()
    const currentRef = useRef(null)
    const navigate = useNavigate()

    const reset = () => {
        resetIsCheck()
        resetMyAccount()
        resetLoginMode()
    }
    const handleClick = (step: string) => {
        switch (step) {
            case "step1":
                if (!isCheck.step1) return Alert.fire({ icon: "error", title: "주의사항을 확인해주세요" })
                return setManageMode({
                    ...manageMode,
                    initStep: "step2",
                })

            case "step2":
                if (!isCheck.step2) return Alert.fire({ icon: "error", title: "중복체크를 진행해주세요" })
                return setManageMode({
                    ...manageMode,
                    initStep: "step3",
                })
            case "step3":
                if (!isCheck.step3) return Alert.fire({ icon: "error", title: "정보를 등록해주세요" })
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
                setChange({ isLoginState: true })
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
            <div className="btnWrap">
                <Button
                    width={"25%"}
                    height={"5.6rem"}
                    margin={"0 auto"}
                    fontSize={"1.4rem"}
                    content={"홈으로"}
                    backgroundcolor={"#fdfdfd"}
                    mode={modeState.mode}
                    onClick={() => {
                        reset()
                        return navigate("/login")
                    }}
                    color={"#4690ff"}
                />
                <Button
                    width={"65%"}
                    height={"5.6rem"}
                    margin={"0 auto"}
                    fontSize={"1.4rem"}
                    content={manageMode.initStep === "step4" ? "Let's Start" : "Next Step"}
                    mode={modeState.mode}
                    onClick={() => handleClick(manageMode.initStep)}
                />
            </div>
        </StepPageWrap>
    )
}
