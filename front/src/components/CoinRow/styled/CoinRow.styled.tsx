import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

const mode = "darkMode"

export const CoinRowWrap = styled.div<ISizeProps>`
    display: flex;
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "4.8rem"};
    color: ${({ theme }) => theme[mode].text || ""};
    background-color: ${({ theme }) => theme[mode].basicBg || ""};
`

export const CoinRowContent = styled.div<ISizeProps>`
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "4.8rem"};
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    line-height: ${({height}) => height || "4.8rem"};
    color: ${({color, theme}) => color || theme[mode].text};
`