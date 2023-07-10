import { FlexCenter, FlexSpaceBetween } from "@styled/index"
import { IBtn, ISizeProps, TextProps } from "@utils/interFace/styled.interface"
import { theme } from "colorTheme"
import { ReactNode } from "react"
import styled, { css } from "styled-components"

interface StepWrapProps {
    children: ReactNode
}
export const StepWrap = styled.div<StepWrapProps>`
    height: 100%;
    margin-bottom: 2rem;
    ${FlexCenter}
    justify-content: space-between;
    & > .step3 {
        height: 100%;
    }
`
export const MnemonicWrap = styled.form<ISizeProps>`
    font-size: 2rem;
    width: 100%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
export const FormBtn = styled.button<ISizeProps>`
    width: fit-content;
    height: fit-content;
    border: none;
    background: none;
    margin-top: 2rem;
    margin-left: 70%;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
    &:active {
        color: ${({ theme, mode }) => mode && theme[mode].footerColor};
    }
`
export const MnemonicItem = styled.div<ISizeProps>`
    ${FlexCenter}
    flex-direction: row;
    font-size: 2rem;
    width: 50%;
    max-height: 10%;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
export const TextComp = styled.div<TextProps>`
    font-size: ${(props) => props.fontSize || "inherit"};
    ${({ position }) => (position === "between" ? `${FlexSpaceBetween}` : `${FlexCenter}`)}
    font-weight: 800;
    text-align: center;
    width: ${(props) => props.width || "fit-content"};
    color: ${({ color, theme, mode }) => color || (mode && theme[mode].text) || "inherit"};
    & > .account {
        display: block;
        width: fit-content;
        padding: 0.7rem 1.4rem;
        border-radius: 1rem;
        font-size: 1.2rem !important;
        background-color: #ffc850;
    }
`

export const AccountAdWrap = styled.div<ISizeProps>`
    width: 100%;
`

export const InputWrap = styled.div<ISizeProps>`
    width: 100%;
    height: 20%;
    margin-top: 3rem;
    & > span {
        display: block;
        width: calc(100% - 4rem);
        margin: 0 auto 1rem;
        font-size: 1.6rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`
