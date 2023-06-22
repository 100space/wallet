import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NftCardImgWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};

    &, & > img {
        border-radius: 0.75rem;
    }
`

export const NftCardImage = styled.img<ISizeProps>`
    height: ${({ height }) => height || "100%"};
`