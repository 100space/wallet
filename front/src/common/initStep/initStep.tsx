import { InitMode } from "@utils/localStorage"
import { useRecoilState } from "recoil"
import { Step1, Step2, Step3, Step4 } from "."

export const InitStepPage = () => {
    const [{ initMode, initStep }, setManageMode] = useRecoilState(InitMode)
    const render = (initStep: string) => {
        switch (initStep) {
            case "step1":
                return <Step1 />
            case "step2":
                return <Step2 />
            case "step3":
                return <Step3 />
            case "step4":
                return <Step4 />
            default:
                break
        }
    }
    return <>{render(initStep)}</>
}
