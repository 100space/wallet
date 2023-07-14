import { SizePropsStyled } from "@styled/index"
import { INFTContent, ISizeProps } from "@utils/interFace/styled.interface"
import styled, { css } from "styled-components"

export const NftCardContentsWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    min-height: ${(props) => props.height};
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NftCardContentWrap = styled.div<ISizeProps>`
    width: ${({ width }) => width || "100%"};
    min-width: 16rem;
    & + & {
        margin-top: 1rem;
    }
    & > div {
        font-weight: 500;
    }
`

export const NftCardContent = styled.div<INFTContent>`
    ${SizePropsStyled};
    margin-top: 0.5rem;
    font-size: ${({ height }) => height};
    ${({ theme, mode, types }) =>
        types === "owner"
            ? css`
                  background: linear-gradient(#999999, #ffffff);
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
              `
            : types === "krw"
            ? css`
                  color: #bda88b;
              `
            : css`
                  color: ${mode && theme[mode].text};
              `};
`
