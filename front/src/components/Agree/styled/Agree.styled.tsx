import { SizePropsStyled } from "@styled/index"
import { ITypeSize, ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const AgreeWrap = styled.div<ISizeProps>`
    ${SizePropsStyled}
    display: flex;
    align-items: center;
    margin: 3rem auto 0;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`

export const AgreeCheckBoxWrap = styled.div<ISizeProps>`
    ${SizePropsStyled}
`

export const AgreeCheckBox = styled.input<ITypeSize>`
    ${SizePropsStyled}
`

export const AgreeContentWrap = styled.div<ISizeProps>`
    ${SizePropsStyled}
`

export const AgreeContent = styled.p<ISizeProps>`
    word-break: keep-all;
    font-size: 1.2rem;
    font-weight: 700;
`
