import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"

export const AccountListWrap = styled.div<ISizeProps>`
    margin: 0 auto;
    & > .BtnWarp {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 3rem;
    }
`
