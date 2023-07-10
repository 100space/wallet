import { Shadow } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const CoinSlider = styled.div<ISizeProps>`
    padding: 1rem 0.5rem;
    display: flex;
    overflow: scroll;
    & > div {
        &:nth-child(1) {
            margin-left: 0;
        }
        margin-left: 1rem;
        ${Shadow}
        background-color: #ffffff;
    }
`
