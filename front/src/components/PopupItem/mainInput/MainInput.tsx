import { InputComp } from "@components/input"
import { SubjectWrap } from "@components/PopupItem/mainInput/styled/index"

export const sendList = [
    {subject: "보낼 계좌", content:"보낼 계좌를 입력해주세요"},
    {subject: "금액", content:"금액을 입력해주세요"},
]

export const bringList = [
    {subject: "계약주소(CA)", content:"토큰 계약주소"},
    {subject: "토큰 기호(Symbol)", content:"토큰 기호"},
    {subject: "토큰 소수점(Decimal)", content:"토큰 소수점"},
]

export interface InputList{
    subject: string
    content: string
}

export const MainInput = (props:{inputArray: InputList[]}) => {

    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => {
            return(
                <>
                    <SubjectWrap>
                        {v.subject}
                    </SubjectWrap>
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
