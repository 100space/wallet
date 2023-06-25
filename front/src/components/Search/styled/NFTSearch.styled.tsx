import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const NFTSearchWrap = styled.div<ISizeProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > input {
        width: 80%;
    }

    & > svg {
        cursor: pointer;
        position: absolute;
        right: 12.5%;
        color: ${({ mode, theme }) => mode && theme[mode].text};
        font-size: 4rem;
    }
`
export const NFTSearchInput = styled.input<ISizeProps>`
    padding: 1.5rem 3rem;
    border: 1px solid ${({ mode, theme }) => mode && theme[mode].text};
    color: ${({ mode, theme }) => mode && theme[mode].text};
    border-radius: 2.5rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].basicBg};
    text-align: center;
`