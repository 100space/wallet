import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const NFTSearchWrap = styled.div<ISizeProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    & > input {
        width: 100%;
    }

    & > svg {
        cursor: pointer;
        position: absolute;
        right: 5%;
        color: ${({ mode, theme }) => mode && theme[mode].text};
        font-size: 3rem;
    }
    & > .ms-editor-squiggles-container {
        display: none;
    }
`
export const NFTSearchInput = styled.input<ISizeProps>`
    padding: 1rem 2rem;
    border: 0.1rem solid ${({ mode, theme }) => mode && theme[mode].text};
    color: ${({ mode, theme }) => mode && theme[mode].text};
    border-radius: 2.5rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].basicBg};
    text-align: center;
    font-size: 1.4rem;
`
