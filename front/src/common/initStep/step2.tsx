import { InputComp } from "@components/input"
import { Description } from "@components/Description"
import { MnemonicItem, MnemonicWrap, StepWrap, TextComp } from "./styled"
import React, { ReactNode, useState } from "react"
import { useGetMode } from "@hooks/useMode"
import { IsCheck, MyAccount } from "@utils/localStorage"
import { useRecoilState } from "recoil"
import { CryptoMnemonic } from "@utils/crypto/crypto"

export const Step2 = () => {
    const [modeState, setChange] = useGetMode()
    const [myAccounts, setMyAccounts] = useRecoilState(MyAccount)
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [inputValues, setInputValues] = useState<string[]>(Array(12).fill(""))

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
                        value={i === 0 ? undefined : i === 11 ? undefined : myAccounts.myMnemonic[i]}
                    />
                </MnemonicItem>
            )
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const length = e.currentTarget.elements.length - 1
        const mnemonicArray: string[] = []
        for (let i = 0; i < length; i++) {
            mnemonicArray.push((e.currentTarget[i] as HTMLInputElement).value)
        }
        const result = myAccounts.myMnemonic.filter((v: string, i: number) => v === mnemonicArray[i])
        if (result.length === 12) {
            const crypto = CryptoMnemonic(mnemonicArray)
            setIsCheck({ ...isCheck, step2: true })
            setMyAccounts({ ...myAccounts, myMnemonic: crypto })
        }
    }

    return (
        <StepWrap>
            <Description step="step2" />
            <MnemonicWrap mode={modeState.mode} onSubmit={handleSubmit}>
                {inputMnemonic()}
                <button> 중복 확인하기 </button>
            </MnemonicWrap>
        </StepWrap>
    )
}
