import { ISizeProps } from "@utils/interFace/styled.interface"
import { theme } from "colorTheme"
import { styled } from "styled-components"

export const PopupWrappers = styled.div<ISizeProps>`
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background: ${({ theme, mode }) => mode && theme[mode].bg200};
    border-radius: 2rem 2rem 0 0;
    justify-content: space-between;
    align-items: center;
`

export const PopupWrap = styled.div`
    width: 30%;
    height: 4rem;
    background-color: #d9d9d9;
    border-radius: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
`
