import { InputComp } from "@components/input"
import { SubCon } from "@components/PopupItem/sendComp/index"

export const sendList = [
    {subject: "보낼 계좌", content:"보낼 계좌를 입력해주세요"},
    {subject: "금액", content:"금액을 입력해주세요"},
]

export const bringList = [
    {subject: "계약주소(CA)", content:"토큰 계약주소"},
    {subject: "토큰 기호(Symbol)", content:"토큰 기호"},
    {subject: "토큰 소수점(Decimal)", content:"토큰 소수점"},
]

export const subject = [
    {subject: "토큰 가져오기", content: ""}
]

export interface InputList{
    subject: string
    content: string
}

export const SendComp = (props:{inputArray: InputList[]}) => {

    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => {
            return(
                <>
                    {/* <SubCon/> */}
                    {v.subject}
                    <InputComp placeholder={v.content}/>
                </>
            )
        })
    }

    return(
        <>
            {inputList(props.inputArray)}
        </>
    )
}
