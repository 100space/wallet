import { ISizeProps } from "@utils/interFace/styled.interface"
import { theme } from "colorTheme"
import { styled } from "styled-components"

export const PopupWrappers = styled.div<ISizeProps>`
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 2rem 2rem 0 0;
    justify-content: space-between;
    align-items: center;
    `

export const PopupWrap = styled.div<ISizeProps>`
    cursor: pointer;
    width: 30%;
    height: 4rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].popupBtnBg};
    border-radius: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme,mode }) => mode && theme[mode].text };
`
