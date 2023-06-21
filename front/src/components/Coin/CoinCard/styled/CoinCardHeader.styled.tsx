import { ICoinName } from "@utils/interFace/coin.interface"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

const mode = "darkMode"

export const CoinCardHeaderWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    `

export const CoinCardHead = styled.header<ISizeProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const CoinCardHeaderImgWrap = styled.div<ISizeProps>`
    display: flex;
    align-items: center;
    width: ${(props) => props.width || "32.5%"};
    height: ${(props) => props.height || "100%"};
`

export const CoinCardHeaderImg = styled.img<ISizeProps>`
    border-radius: 50%;
    width: ${(props) => props.width || "2.8rem"};
    height: ${(props) => props.height || "2.8rem"};
`

export const CoinCardHeaderContentWrap = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${(props) => props.width || "67.5%"};
    height: ${(props) => props.height || "100%"};
`

export const CoinCardHeaderSymbol = styled.div<ISizeProps>`
    margin-bottom: 0.25rem;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "1.6rem"};
    color: ${(props) => props.theme[mode].textCoinSymbol};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 700;
`

export const CoinCardHeaderName = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "1rem"};
    color: ${(props) => props.theme[mode].textCoinName};
    font-size: 1rem;
    font-weight: 500;
`



export const CoinCardHeader = ({image, symbol, name}: ICoinName) => {
    return (
        <CoinCardHeaderWrap width={"12rem"} height="35%">
            <CoinCardHead width="85%" height="60%">
                <CoinCardHeaderImgWrap>
                    <CoinCardHeaderImg src={image} />
                </CoinCardHeaderImgWrap>
                <CoinCardHeaderContentWrap>
                    <CoinCardHeaderSymbol>
                        {symbol}
                    </CoinCardHeaderSymbol>
                    <CoinCardHeaderName>
                        {name}
                    </CoinCardHeaderName>
                </CoinCardHeaderContentWrap>
            </CoinCardHead>
        </CoinCardHeaderWrap>
    )
}