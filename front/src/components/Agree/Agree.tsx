import { AgreeWrap, AgreeCheckBoxWrap, AgreeCheckBox, AgreeContentWrap, AgreeContent } from "./styled/Agree.styled"
import { ChangeEvent, useEffect, useState } from "react"
import { useGetMode } from "@hooks/useMode"
import { useRecoilState } from "recoil"
import { IsCheck, MyAccount } from "@utils/localStorage"
import { Step1 } from "@common/initStep"
import { IMnemonic } from "@utils/interFace/core"
import { CryptoMnemonic } from "@utils/crypto/crypto"

const data = {
    content: "복구 문구(니모닉)을 잃어버리면 지갑에 있는 모든 암호화폐를 잃어버리는 것을 이해했습니다.",
}

export const Agree = ({ mnemonic }: IMnemonic) => {
    const [modeState, setChange] = useGetMode()
    const [isCheck, setIsCheck] = useRecoilState(IsCheck)
    const [myAccounts, setMyAccounts] = useRecoilState(MyAccount)
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMyAccounts({ ...myAccounts, myMnemonic: mnemonic })
        setIsCheck({ ...isCheck, step1: e.currentTarget.checked })
    }
    useEffect(() => {
        setIsCheck({ ...isCheck, step1: false })
    }, [])
    return (
        <AgreeWrap width="100%" height={"5%"} mode={modeState.mode}>
            <AgreeCheckBoxWrap width="10%">
                <AgreeCheckBox width="60%" height="auto" type="checkbox" onChange={handleCheckboxChange} />
            </AgreeCheckBoxWrap>
            <AgreeContentWrap>
                <AgreeContent>{data.content}</AgreeContent>
            </AgreeContentWrap>
        </AgreeWrap>
    )
}
