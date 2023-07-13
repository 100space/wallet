import { Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const RowListWrap = styled.div<ISizeProps>`
    width: 100%;
    height: fit-content;
    /* border-radius: 1rem; */
    /* background: ${({ theme, mode }) => mode && theme[mode].bg200}; */
    ${Shadow}
`
