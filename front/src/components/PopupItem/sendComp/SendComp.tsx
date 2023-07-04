import { Button } from "@components/Button"
import { InputComp } from "@components/input"
import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"
import { ConInfo } from "@components/Description"
import { SendCompWrapper, SendCompWrap } from "@components/PopupItem/sendComp/styled/index"
import { Wrapper } from "@styled/index"

export const sendList = [
    { subject: "보낼 계좌", content: "보낼 계좌를 입력해주세요", className: "contractAddress" },
    { subject: "금액", content: "금액을 입력해주세요", className: "amount" },
]

export const tokenBringList = [
    { subject: "계약주소(CA)", content: "토큰 계약주소", className: "contractAddress" },
    { subject: "토큰 기호(Symbol)", content: "토큰 기호", className: "symbol" },
    { subject: "토큰 소수점(Decimal)", content: "토큰 소수점", className: "decimal" },
]

export const nftGetList = [
    { subject: "계약주소(CA)", content: "0x...", className: "contractAddress" },
    { subject: "토큰 아이디(Token ID)", content: "토큰 아이디", className: "tokenId" },
]
export interface InputList {
    subject: string
    content: string
    tokenTitle?: string
    nftTitle?: string
    className?: string
    address?: string
}

export const SendComp = (props: {
    inputArray: InputList[]
    BtnContent?: string
    className?: string
    address?: string
}) => {
    const { mode } = useRecoilValue(ModeState)
    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => (
            <>
                <SendCompWrapper key={index}>
                    <SendCompWrap>{v.subject}</SendCompWrap>
                    {v.className === "contractAddress" ? (
                        <InputComp
                            value={props.address}
                            placeholder={v.content}
                            height={4}
                            type=""
                            fontSize={1.4}
                            className={v.className}
                        />
                    ) : (
                        <InputComp placeholder={v.content} height={4} type="" fontSize={1.4} className={v.className} />
                    )}
                </SendCompWrapper>
            </>
        ))
    }

    return (
        <>
            {inputList(props.inputArray)}
            <Button
                width={"70%"}
                height={"5rem"}
                mode={mode}
                margin="3rem auto 0 "
                content={props.BtnContent}
                fontSize="1.6rem"
            ></Button>
        </>
    )
}
