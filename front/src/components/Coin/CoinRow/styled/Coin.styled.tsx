import { ISizeProps, ITypeSize } from "@utils/interFace/styled.interface"
import styled from "styled-components"

const mode = "darkMode"

export const CoinWrap = styled.div<ISizeProps>`
    display: flex;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "4.8rem"};
    color: ${({ theme }) => theme[mode].text || ""};
    border-bottom: 0.1rem solid #00000075;
    &:nth-child(2n) {
        background-color: ${({ theme, mode }) => (mode && theme[mode].basicBg) || ""};
    }
    &:nth-last-child(1) {
        border: none;
    }
`

export const CoinContent = styled.div<ITypeSize>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "4.8rem"};
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    line-height: ${({ height }) => height || "4.8rem"};
    color: ${({ color, theme }) => color || theme[mode].text};
`
