import { ConInfo } from "@components/Description"
import { InputComp } from "@components/input"
import { SendCompWrapper, SendCompWrap, TitleWrapper, TitleWrap } from "@components/PopupItem/sendComp/styled/index"
import { Wrapper } from "@styled/index"
import { Button } from "@components/Button"

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

export const title = [
    {tokenTitle: "토큰 가져오기", nftTitle: "NFT 가져오기"}
]

export interface InputList{
    subject: string
    content: string
    tokenTitle?: string
    nftTitle?: string
}

export const SendComp = (props:{inputArray: InputList[]}) => {
    
    const inputList = (inputArray: InputList[]) => {
        return inputArray.map((v, index) => {
            console.log(v.tokenTitle)
            return(
                <>
                    {/* <TitleWrapper> 
                        <TitleWrap>{title[index] ? title[index].tokenTitle:title[index].nftTitle}</TitleWrap>
                    </TitleWrapper> */}
                    <SendCompWrapper key={index}>
                        <SendCompWrap>                        
                            {v.subject}
                        </SendCompWrap>
                        <InputComp placeholder={v.content}/>
                    </SendCompWrapper>
                </>
            )
        })
    }

    return(
        <>
            <Wrapper>
                <TitleWrapper>
                    <TitleWrap> 토큰 가져오기 </TitleWrap>
                    <ConInfo> 토큰의 계약주소와 토큰의 아이디를 입력하여 토큰을 가져올 수 있습니다.</ConInfo>
                </TitleWrapper>
                {inputList(props.inputArray)}
                {/* <Button width="" height="" margin="" mode="" onClick={handleButtonClick} fontSize="" backgroundcolor=""/> */}
            </Wrapper>
        </>
    )
}
