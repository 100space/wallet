import { TextComp } from "@common/initStep/styled"
import { Backspace, Icons, LoginWrapper, IconWrap } from "@components/LoginHeader/styled/LoginHeader.styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { IStepProps } from "@utils/interFace/core"
import { InitMode } from "@utils/localStorage"
import { ReactNode, useRef } from "react"
import { useRecoilValue } from "recoil"

export const LoginImg = {
    check: require("@img/check.png"),
    line: require("@img/line.png"),
    afterLine: require("@img/afterLine.png"),
    backSpace: require("@img/backSpace.png"),
}

export const StepObj: IStepProps = {
    step1: 0,
    step2: 1,
    step3: 2,
    step4: 3,
}

export const AccountProduce = [
    { content: "니모닉 생성" },
    { content: "니모닉 확인" },
    { content: "정보 입력" },
    { content: "지갑 생성" },
]

export const LoadAccount = [{ content: "니모닉 입력" }, { content: "정보 입력" }, { content: "가져오기 완료" }]

export const LoginHeader = () => {
    const [modeState, setChange] = useGetMode()
    const step = useRecoilValue(InitMode)
    const renderWalletHeader = (walletArray: { content: string }[]) => {
        return walletArray.map((v, i, array) => {
            const match: boolean = StepObj[step] === i
            return (
                <div className="headerItem" key={i}>
                    <TextComp fontSize="2rem" color={match ? "#74cffc" : undefined}>
                        <Icon icon={`iconamoon:number-${i + 1}-circle-light`} className={step.initStep} />
                    </TextComp>
                    <TextComp fontSize="1.2rem" color={match ? "#74cffc" : undefined}>
                        {v.content}
                    </TextComp>
                </div>
            )
        })
    }
    const headerObj = step.initMode === "create" ? AccountProduce : LoadAccount
    return (
        <>
            <LoginWrapper mode={modeState.mode}>
                <IconWrap>{renderWalletHeader(headerObj)}</IconWrap>
            </LoginWrapper>
        </>
    )
}
