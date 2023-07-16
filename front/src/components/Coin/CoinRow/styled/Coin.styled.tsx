import { ISizeProps, ITypeSize } from "@utils/interFace/styled.interface"
import styled from "styled-components"

const mode = "darkMode"

export const CoinWrap = styled.div<ISizeProps>`
    display: flex;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "4.8rem"};
    color: ${({ theme }) => theme[mode].text};
    border-bottom: 0.1rem solid #55555555;
    &:nth-child(2n) {
        background-color: ${({ theme, mode }) => mode && theme[mode].coinBg};
    }
    &:nth-last-child(1) {
        border: none;
    }
    &:nth-child(n) {
        background-color: ${({ theme, mode }) => mode && theme[mode].coinBg};
    }
`

export const CoinContent = styled.div<ITypeSize>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "4.8rem"};
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    line-height: ${({ height }) => height || "4.8rem"};
    color: ${({ color, theme, mode }) => color || (mode && theme[mode].text)};
`
