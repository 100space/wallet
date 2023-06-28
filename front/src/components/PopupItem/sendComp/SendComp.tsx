import { Button } from "@components/Button"
import { InputComp } from "@components/input"
import { SendCompWrapper, SendCompWrap } from "@components/PopupItem/sendComp/styled/index"
import { ModeState } from "@utils/localStorage"
import { useRecoilValue } from "recoil"

export const sendList = [
    { subject: "보낼 계좌", content: "보낼 계좌를 입력해주세요" },
    { subject: "금액", content: "금액을 입력해주세요" },
]

export const bringList = [
    { subject: "계약주소(CA)", content: "토큰 계약주소" },
    { subject: "토큰 기호(Symbol)", content: "토큰 기호" },
    { subject: "토큰 소수점(Decimal)", content: "토큰 소수점" },
]

export const subject = [{ subject: "토큰 가져오기", content: "" }]

export interface InputList {
    subject: string
    content: string
}

export const SendComp = (props: { inputArray: InputList[] }) => {
    const { mode } = useRecoilValue(ModeState)
    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => {
            return (
                <>
                    <SendCompWrapper key={index}>
                        <SendCompWrap>{v.subject}</SendCompWrap>
                        <InputComp placeholder={v.content} height={4} type="" fontsize={1.4} />
                    </SendCompWrapper>
                </>
            )
        })
    }

    return (
        <>
            {inputList(props.inputArray)}
            <Button width={"70%"} height={"5rem"} mode={mode} margin="3rem auto 0 "></Button>
        </>
    )
}
