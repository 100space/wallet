import { Alert } from "@components/Alert/alert"
import { Button } from "@components/Button"
import { Description } from "@components/Description"
import { InputComp } from "@components/input"
import { useGetMode } from "@hooks/useMode"
import { CryptoPassword } from "@utils/crypto/crypto"
import { IsCheck, MyProfile } from "@utils/localStorage"
import React, { ReactElement, useRef } from "react"
import { useRecoilState } from "recoil"
import { FormBtn, InputWrap, StepWrap } from "./styled"

export const Step3 = () => {
    const info = ["닉네임을 입력해주세요", "비밀번호를 입력해주세요", "비밀번호를 확인해주세요"]
    const [modeState, setChange] = useGetMode()
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [myProfile, setMyProfile] = useRecoilState(MyProfile)
    const InfoComp = info.map((v, i) => {
        return (
            <InputWrap mode={modeState.mode} key={i}>
                <span>{v}</span>
                <InputComp type={i === 0 ? "text" : "password"} placeholder={v} mode={modeState.mode} value="" />
            </InputWrap>
        )
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const nickName = (e.currentTarget[0] as HTMLInputElement).value
        const password = (e.currentTarget[1] as HTMLInputElement).value
        const checkPassword = (e.currentTarget[2] as HTMLInputElement).value
        if (password !== checkPassword) return Alert.fire({ icon: "error", title: "비밀번호를 확인해주세요" })
        setMyProfile({ ...myProfile, password: CryptoPassword(password), nickName })
        setIsCheck({ ...isCheck, step3: true })
        Alert.fire({ icon: "success", title: "정상적으로 저장되었습니다." })
    }
    return (
        <StepWrap>
            <Description step="step3" />
            <form className="step3" onSubmit={handleSubmit}>
                {InfoComp}
                <FormBtn mode={modeState.mode}> 등록하기 </FormBtn>
            </form>
        </StepWrap>
    )
}
