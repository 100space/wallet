import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const CopyFunctionWrap = styled.div<ISizeProps>`
    display: flex;
    margin-top: 1rem;
    ${SizePropsStyled}
    color: ${({ theme, mode }) => mode && theme[mode].texthide};
    cursor: pointer;
`

export const CopyFunctionIcon = styled.div<ISizeProps>`
    ${SizePropsStyled}
    font-size: 1.75rem;
`

export const CopyFunctionContent = styled.div<ISizeProps>`
    ${SizePropsStyled}
    font-size: 1.2rem;
    font-weight: 700;
`
