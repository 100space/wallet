import { ICoin, ITypeSize } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const CoinNameFormWrap = styled.div<ITypeSize>`
    display: flex;
    align-items: center;
    ${({type}) => type === "row" ? "width: 27.5%; height: 4.8rem;": ""}

    & > div + div {
        padding-left: 1rem;
        box-sizing: border-box;
    }
`

export const CoinNameImgWrap = styled.div<ITypeSize>`
    width: 2.8rem;
    height: 2.8rem;
`

export const CoinNameWrap = styled.div`
    
`

export const CoinNameImg = styled.img<ITypeSize>`
    height: 100%;
    border-radius: 50%;
    `

export const CoinSymbol =styled.div<ITypeSize>`
    font-size: 1.2rem;
    font-weight: 700;
    `

export const CoinName = styled.div<ITypeSize>`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({theme, mode}) => (mode && theme[mode].textCoinName) || "#888"};
`

export const CoinNameForm = ({ coinImg ,name, symbol, width, type }: ICoin) => {
    return(
        <CoinNameFormWrap type={type}>
            <CoinNameImgWrap>
                <CoinNameImg src={coinImg}/>
            </CoinNameImgWrap>
            <CoinNameWrap>
                <CoinSymbol>
                    {symbol}
                </CoinSymbol>
                <CoinName>
                    {name}
                </CoinName>
            </CoinNameWrap>
        </CoinNameFormWrap>
    )
}