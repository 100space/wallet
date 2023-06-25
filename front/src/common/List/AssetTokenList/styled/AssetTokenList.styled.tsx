import { ISizeProps } from "@utils/interFace/styled.interface"
import { styled } from "styled-components"
import { BorderBottomWhite } from "@styled/index"

export const AssetTokenListWrap = styled.div<ISizeProps>`
    
    & > div {
        ${BorderBottomWhite};
    }

    & > div:nth-last-child(1) {
        border-bottom: none;
    }
`
