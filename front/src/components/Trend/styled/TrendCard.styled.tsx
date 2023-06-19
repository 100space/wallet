import { styled } from "styled-components"

const mode = "darkMode"

export const TrendCardWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "13.2rem"};
    background-color: ${(props) => props.theme[mode].bgTrend};
    border-radius: 1rem;
`

export const TrendCardHeaderWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    `

export const TrendCardHeader = styled.header<ISizeProps>`
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
    font-style: italic;
    font-weight: 500;
`

export const TrendCardContentWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardContentPriceWrap = styled.div<ISizeProps>`
    margin: 0 auto;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardContentPercentWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardContentPercent = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    font-style: italic;
    color: ${(props) => props.color || "#000000"};
`