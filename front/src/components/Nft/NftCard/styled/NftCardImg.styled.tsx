import { ImageForm, SizePropsStyled, Wrapper } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NftCardImgWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    min-height: ${(props) => props.height};
    &,
    & > img {
        margin: 0 auto;
        border-radius: 0.75rem;
    }
`

export const NftCardImage = styled.img<ISizeProps>`
    display: block;
    height: ${(props) => props.height};
    margin: 0 auto;
    border: 0.2rem solid #fff;
`
