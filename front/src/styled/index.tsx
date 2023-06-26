import { ISizeProps } from "@utils/interFace/styled.interface"
import styled, { css } from "styled-components"

export const FlexCenter = css`
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
`
export const FlexSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FullScreen = css`
    width: 100%;
    height: 100%;
`

export const BorderBottom = css`
    border-bottom: 1px solid #00000075;
`

export const BorderBottomWhite = css`
    border-bottom: 1px solid #aaaaaa;
`

export const RootWrap = styled.div<ISizeProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;

    background: ${({ theme, mode }) => mode && theme[mode].basicBg};
`

export const Wrapper = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const ImageForm = styled.img<ISizeProps>`
    height: ${(props) => props.height || "100%"};
`

export const SizePropsStyled = css<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const Shadow = css`
    box-shadow: 0 0.5rem 0rem 0px rgba(0, 0, 0, 0.85);
`
