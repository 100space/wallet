import { TextComp } from "@common/initStep/styled"
import { TotalWrap } from "./styled"
import { selector, useRecoilValue } from "recoil"
import { Alert } from "@components/Alert/alert"
import CopyToClipboard from "react-copy-to-clipboard"
import { KRW } from "@components/Nft/NftCard"
import { useGetMode } from "@hooks/useMode"
import { atom } from "recoil"
import { ModeState, MyAccounts } from "@utils/localStorage"
import { useEffect, useState } from "react"

const storedValue = localStorage.getItem('MyAccounts.address')
const numericValue = storedValue ? parseInt(storedValue, 10) : 0

interface ITotalSupply {
    profile?: string
}

export const TotalSupply = ({ profile }: ITotalSupply) => {
    const data = useRecoilValue(MyAccounts)
    const { mode } = useRecoilValue(ModeState)

    return (
        <TotalWrap mode={mode} profile={"true"}>
            <TextComp fontSize={profile === "true" ? "2.5rem" : "3rem"} position="between" width="100%">
                총 자산
                <CopyToClipboard 
                    text={data.address}
                    onCopy={() => Alert.fire({ icon: "info", title: "클립보드에 복사되었습니다." })}
                >
                    <span className="account">{data.address}</span>
                </CopyToClipboard>
            </TextComp>
            <TextComp fontSize={profile === "true" ? "2.2rem" : "2.4rem"} position="between" width="100%">
                <span>KRW</span>
                <span>{KRW(23123210)}</span>
            </TextComp>
        </TotalWrap>
    )
}
