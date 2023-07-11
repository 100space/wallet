import { Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const CoinSlideWrap = styled.div<ISizeProps>`
    border-radius: 1rem;
    padding: 0 0.5rem;
    &,
    & > div {
        border-radius: 1rem;
    }
`
