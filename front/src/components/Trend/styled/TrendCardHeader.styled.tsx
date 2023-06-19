import { ITrendCardHeader } from "@utils/interFace/core"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

const mode = "darkMode"

export const TrendCardHeaderWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    `

export const TrendCardHead = styled.header<ISizeProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardHeaderImgWrap = styled.div<ISizeProps>`
    display: flex;
    align-items: center;
    width: ${(props) => props.width || "32.5%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardHeaderImg = styled.img<ISizeProps>`
    border-radius: 50%;
    width: ${(props) => props.width || "28px"};
    height: ${(props) => props.height || "28px"};
`

export const TrendCardHeaderContentWrap = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${(props) => props.width || "67.5%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardHeaderSymbol = styled.div<ISizeProps>`
    margin-bottom: 0.25rem;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "1.6rem"};
    color: ${(props) => props.theme[mode].textTrendSymbol};
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 700;
`

export const TrendCardHeaderName = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "1rem"};
    color: ${(props) => props.theme[mode].textTrendName};
    font-size: 1rem;
    font-weight: 500;
`

export const TrendCardHeader = ({image, symbol, name}: ITrendCardHeader) => {
    return (
        <TrendCardHeaderWrap height="35%">
            <TrendCardHead width="90%" height="60%">
                <TrendCardHeaderImgWrap>
                    <TrendCardHeaderImg src={image} />
                </TrendCardHeaderImgWrap>
                <TrendCardHeaderContentWrap>
                    <TrendCardHeaderSymbol>
                        {symbol}
                    </TrendCardHeaderSymbol>
                    <TrendCardHeaderName>
                        {name}
                    </TrendCardHeaderName>
                </TrendCardHeaderContentWrap>
            </TrendCardHead>
        </TrendCardHeaderWrap>
    )
}