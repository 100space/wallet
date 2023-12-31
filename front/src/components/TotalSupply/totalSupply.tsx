import { TextComp } from "@common/initStep/styled"
import { TotalWrap } from "./styled"
import { ModeState, MyAccounts, MyTokens } from "@utils/localStorage"
import { selector, useRecoilValue } from "recoil"
import { Alert } from "@components/Alert/alert"
import CopyToClipboard from "react-copy-to-clipboard"
import { KRW } from "@components/Nft/NftCard"
import { useGetMode } from "@hooks/useMode"
import { atom } from "recoil"

import { useEffect, useState } from "react"

const storedValue = localStorage.getItem("MyAccounts.address")
const numericValue = storedValue ? parseInt(storedValue, 10) : 0

interface ITotalSupply {
    profile?: string
}

export const TotalSupply = ({ profile }: ITotalSupply) => {
    const { mode } = useRecoilValue(ModeState)
    const { address } = useRecoilValue(MyAccounts)
    const myTokens = useRecoilValue(MyTokens)
    const [modeState, setChange] = useGetMode()
    let totalBalance = 0
    const balance = myTokens.forEach((v: any) => {
        totalBalance += v.assets[1].amount
    })

    return myTokens ? (
        <TotalWrap mode={mode} profile={"true"}>
            <TextComp
                mode={modeState.mode}
                fontSize={profile === "true" ? "2.5rem" : "3rem"}
                position="between"
                width="100%"
            >
                총 자산
                <CopyToClipboard
                    text={address}
                    onCopy={() => Alert.fire({ icon: "info", title: "클립보드에 복사되었습니다." })}
                >
                    <span className="account">{address.substring(0, 8) + "..." + address.substring(36, 42)}</span>
                </CopyToClipboard>
            </TextComp>
            <TextComp
                mode={modeState.mode}
                fontSize={profile === "true" ? "2.2rem" : "2.4rem"}
                position="between"
                width="100%"
            >
                <span>KRW</span>
                <span>{KRW(Number(totalBalance.toFixed(3)))}</span>
            </TextComp>
        </TotalWrap>
    ) : (
        <></>
    )
}
