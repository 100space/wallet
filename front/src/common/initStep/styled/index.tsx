import { FlexCenter } from "@styled/index"
import { ISizeProps, TextProps } from "@utils/interFace/styled.interface"
import { theme } from "colorTheme"
import { ReactNode } from "react"
import styled from "styled-components"

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
    & > button {
        ${FlexCenter}
        background: none;
        border: none;
        margin: 2rem auto 0;
        cursor: pointer;
        color: ${({ theme, mode }) => mode && theme[mode].mnimonicColor};
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
    ${FlexCenter}
    font-weight: 800;
    text-align: center;
    width: ${(props) => props.width || "fit-content"};
    color: ${(props) => props.color || "inherit"};
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
