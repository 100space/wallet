import { SizePropsStyled } from "@styled/index"
import { ITypeSize, ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const AgreeWrap = styled.div<ISizeProps>`
    ${SizePropsStyled}
    display: flex;
    align-items: center;
    margin: 0 auto;
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
    color: ${(props) => props.color || "black"};
    font-size: 1.2rem;
    font-weight: 700;
`
