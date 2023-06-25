import { FlexSpaceBetween } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const HeaderWrapper = styled.div`
    ${FlexSpaceBetween}
    width: 100%;
    height: 10%;
    padding: 1rem;
`
export const FunctionWrap = styled.div<ISizeProps>`
    ${FlexSpaceBetween}
    width: 20%;
    height: 100%;
    & > svg {
        font-size: 3.3rem;
        margin: 0.3rem;
        color: ${({ theme, mode }) => mode && theme[mode].text};
    }
`
