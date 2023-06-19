import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

const mode = "darkMode"

export const TrendCardWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "13.2rem"};
    background-color: ${(props) => props.theme[mode].bgTrend};
    border-radius: 1.25rem;
`

export const TrendCardContentWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const TrendCardContentPriceWrap = styled.div<ISizeProps>`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: end;
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
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.color || "#000000"};
`