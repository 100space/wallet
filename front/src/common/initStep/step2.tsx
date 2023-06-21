import { InputComp } from "@components/input"
import { Description } from "@components/Description"
import { MnemonicItem, MnemonicNum, MnemonicWrap, StepWrap } from "./styled"
import React, { ReactNode, useState } from "react"
import { InitMode, ModeState } from "@utils/localStorage"
import { useGetMode } from "@hooks/useMode"
import { constants } from "buffer"

export const Step2 = () => {
    const [modeState, setChange] = useGetMode()
    const [inputValues, setInputValues] = useState<string[]>(Array(12).fill(""))
    const time = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

    const inputMnemonic: () => ReactNode = () => {
        return inputValues.map((v, i) => {
            return (
                <MnemonicItem key={i}>
                    <MnemonicNum>{i + 1}.</MnemonicNum> <InputComp width={60} type="text" />
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
