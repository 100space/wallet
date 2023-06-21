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
    text-align: center;
`
