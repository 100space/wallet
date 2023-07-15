import { InputComp } from "@components/input"
import { Description } from "@components/Description"
import { FormBtn, MnemonicItem, MnemonicWrap, StepWrap, TextComp } from "./styled"
import React, { ReactNode, useState } from "react"
import { useGetMode } from "@hooks/useMode"
import { InitMode, IsCheck, MyAccounts, MyProfile } from "@utils/localStorage"
import { useRecoilState } from "recoil"
import { CryptoMnemonic } from "@utils/crypto/crypto"
import { Alert } from "@components/Alert/alert"
import { useQuery } from "@tanstack/react-query"
import requestServer from "@utils/axios/requestServer"

export const Step2 = () => {
    const [modeState, setChange] = useGetMode()
    const [myProfile, setMyProfile] = useRecoilState(MyProfile)
    const [myAccounts, setMyAccounts] = useRecoilState(MyAccounts)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [initMode, setInitMode] = useRecoilState(InitMode)
    const [inputValues, setInputValues] = useState<string[]>(Array(12).fill(""))

    const createAccountApi = async (mnemonic: string[]) => {
        try {
            if (typeof mnemonic === "string") return
            const { data } = await requestServer.post("/account/mnemonic", { mnemonic })
            setMyAccounts({ ...myAccounts, ...data })
        } catch (error) {
            Alert.fire({ icon: "error", title: "니모닉이 올바르지 않습니다." })
        }
    }

    const inputMnemonic: () => ReactNode = () => {
        return inputValues.map((v, i) => {
            return (
                <MnemonicItem key={i}>
                    <TextComp fontSize="1.8rem" width="2.5rem">
                        {i + 1}.
                    </TextComp>{" "}
                    <InputComp
                        width={60}
                        type=""
                        value={i === 0 ? undefined : i === 11 ? undefined : myProfile.myMnemonic[i]}
                    />
                </MnemonicItem>
            )
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (myProfile.myMnemonic !== 64) createAccountApi(myProfile.myMnemonic)
        const length = e.currentTarget.elements.length - 1
        const mnemonicArray: string[] = []

        if (initMode.initMode === "create") {
            for (let i = 0; i < length; i++) {
                mnemonicArray.push((e.currentTarget[i] as HTMLInputElement).value)
            }
            if (typeof myProfile.myMnemonic === "string")
                return Alert.fire({ icon: "info", title: "다음 단계를 진행하세요" })
            const result = myProfile.myMnemonic.filter((v: string, i: number) => v === mnemonicArray[i])
            if (result.length === 12) {
                Alert.fire({ icon: "success", title: "니모닉이 확인되었습니다" })
                const crypto = CryptoMnemonic(mnemonicArray)
                setIsCheck({ ...isCheck, step2: true })
                setMyProfile({ ...myProfile, myMnemonic: crypto })
            } else {
                Alert.fire({ icon: "error", title: "니모닉을 확인해주세요" })
            }
        } else if (initMode.initMode === "manage") {
            for (let i = 0; i < length; i++) {
                mnemonicArray.push((e.currentTarget[i] as HTMLInputElement).value)
            }
            if (mnemonicArray.length === 12) {
                createAccountApi(mnemonicArray)
                Alert.fire({ icon: "success", title: "니모닉이 확인되었습니다" })
                const crypto = CryptoMnemonic(mnemonicArray)
                setIsCheck({ ...isCheck, step2: true })
                setMyProfile({ ...myProfile, myMnemonic: crypto })
            } else {
                Alert.fire({ icon: "error", title: "니모닉을 확인해주세요" })
            }
            if (myProfile.myMnemonic && typeof myProfile.myMnemonic === "string")
                return Alert.fire({ icon: "info", title: "다음 단계를 진행하세요" })
        }
    }

    return (
        <StepWrap>
            <Description step="step2" />
            <MnemonicWrap mode={modeState.mode} onSubmit={(e) => handleSubmit(e)}>
                {inputMnemonic()}
                <FormBtn mode={modeState.mode}>니모닉 확인하기</FormBtn>
            </MnemonicWrap>
        </StepWrap>
    )
}
