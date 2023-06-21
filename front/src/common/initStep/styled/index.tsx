import { FlexCenter } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { theme } from "colorTheme"
import { ReactNode } from "react"
import styled from "styled-components"

interface StepWrapProps {
    children: ReactNode
}
export const StepWrap = styled.div<StepWrapProps>`
    height: 100%;
    ${FlexCenter}
    justify-content: space-between;
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
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
export const MnemonicNum = styled.div`
    width: 20%;
    ${FlexCenter}
    text-align: center;
`
export const InputWrap = styled.div<ISizeProps>`
    width: 100%;
    & > span {
        display: block;
        width: calc(100% - 4rem);
        margin: 0 auto 2rem;
        font-size: 1.6rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`
