import { InputComp } from "@components/input"
import { Description } from "@components/Description"
import { MnemonicItem, MnemonicWrap, StepWrap, TextComp } from "./styled"
import React, { ReactNode, useState } from "react"
import { useGetMode } from "@hooks/useMode"

export const Step2 = () => {
    const [modeState, setChange] = useGetMode()
    const [inputValues, setInputValues] = useState<string[]>(Array(12).fill(""))
    const time = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

    const inputMnemonic: () => ReactNode = () => {
        return inputValues.map((v, i) => {
            return (
                <MnemonicItem key={i}>
                    <TextComp fontSize="1.8rem" width="2.5rem">
                        {i + 1}.
                    </TextComp>{" "}
                    <InputComp width={60} type="" />
                </MnemonicItem>
            )
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const length = e.currentTarget.elements.length - 1
        const mnemonicArray = []
        for (let i = 0; i < length; i++) {
            mnemonicArray.push((e.currentTarget[i] as HTMLInputElement).value)
        }
        console.log(mnemonicArray)
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
