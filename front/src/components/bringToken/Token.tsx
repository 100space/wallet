import { CloseBtn } from "@components/CloseBtn"
import { TokenWrapper, TokenHeaderWrapper, TokenbtnWrap, TokenWrap, InfoWrap } from "@components/bringToken/styled/index"

export const bringTokenList = [
    {content: "계약주소(CA)"},
    {content: "토큰 기호(Symbol)"},
    {content: "토큰 소수점(Decimal)"},
]



export const Token = () => {

    return(
        <>
            <TokenWrapper>
                <TokenbtnWrap>
                    <CloseBtn/>
                </TokenbtnWrap>
                <TokenHeaderWrapper>
                    토큰 가져오기
                </TokenHeaderWrapper>
                <TokenWrap>
                    토큰의 계약주소와 토큰의 아이디를 입력하여 <br/> 토큰을 가져올 수 있습니다.
                </TokenWrap>
                <InfoWrap>
                    {v.content}
                    <InfoBox/>
                </InfoWrap>
            </TokenWrapper>
        </>
    )
}