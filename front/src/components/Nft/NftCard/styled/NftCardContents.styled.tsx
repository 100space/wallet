import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NftCardContentsWrap = styled.div<ISizeProps>`
    ${SizePropsStyled};
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NftCardContentWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    & + & {
        margin-top: 1rem;
    }
    & > div {
        font-weight: 500;
    }
`

export const NftCardContent = styled.div<ISizeProps>`
    ${SizePropsStyled};
    font-size: ${({ height }) => height};
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
