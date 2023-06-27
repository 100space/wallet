import { SizePropsStyled, Wrapper } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NftCardImgWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    &,
    & > img {
        margin: 0 auto;
        border-radius: 0.75rem;
    }
`

export const NftCardImage = styled.img<ISizeProps>`
    display: block;
    ${Wrapper}
    margin: 0 auto;
`
