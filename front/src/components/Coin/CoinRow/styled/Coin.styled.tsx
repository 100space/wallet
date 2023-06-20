import { ISizeProps, ITypeSize } from "@utils/interFace/styled.interface"
import styled from "styled-components"

const mode = "darkMode"

export const CoinWrap = styled.div<ISizeProps>`
    display: flex;
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "4.8rem"};
    color: ${({ theme }) => theme[mode].text || ""};
    background-color: ${({ theme }) => theme[mode].basicBg || ""};
    border-bottom: 1px solid #00000075;

    &:nth-last-child(1) {
        border: none;
    }
`

export const CoinContent = styled.div<ITypeSize>`
    width: ${({width}) => width || "100%"};
    height: ${({height}) => height || "4.8rem"};
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    line-height: ${({height}) => height || "4.8rem"};
    color: ${({color, theme}) => color || theme[mode].text};
`