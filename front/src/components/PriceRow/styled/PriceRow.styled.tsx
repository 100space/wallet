import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const PriceRowWrap = styled.div<ISizeProps>`
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(1) {
        color: ${({ theme, mode }) => mode && theme[mode].textCoinName};
    }

    & > div:nth-child(2) {
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }

    & > div {
        font-weight: 600;
    }
`

export const PriceRowContent = styled.div<ISizeProps>`
    font-size: 1rem;
`
