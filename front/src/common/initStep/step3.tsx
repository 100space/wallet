import { Description } from "@components/Description"
import { InputComp } from "@components/input"
import { useGetMode } from "@hooks/useMode"
import { InputWrap, StepWrap } from "./styled"

export const Step3 = () => {
    const info = ["닉네임을 입력해주세요", "비밀번호를 입력해주세요", "비밀번호를 확인해주세요"]
    const [modeState, setChange] = useGetMode()
    const InfoComp = info.map((v, i) => {
        return (
            <InputWrap mode={modeState.mode} key={i}>
                <span>{v}</span>
                <InputComp type={i === 0 ? "text" : "password"} placeholder={v} mode={modeState.mode} />
            </InputWrap>
        )
    })
    return (
        <StepWrap>
            <Description step="step3" />
            <div className="step3">{InfoComp}</div>
        </StepWrap>
    )
}
