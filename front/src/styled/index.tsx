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
    border-bottom: 0.1rem solid #00000075;
`

export const BorderBottomWhite = css`
    border-bottom: 0.1rem solid #aaaaaa;
`

export const RootWrap = styled.div<ISizeProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    background: ${({ theme, mode }) => mode && theme[mode].basicBg};
`

export const Wrapper = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const ImageForm = styled.img<ISizeProps>`
    height: ${(props) => props.height || "100%"};
    border: 0.2rem solid #fff;
`

export const SizePropsStyled = css<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const Shadow = css`
    box-shadow: 0.1rem 0.2rem 0 0 rgba(0, 0, 0, 0.429);
`
export const PlatWrap = styled.div<ISizeProps>`
    height: fit-content;
    background: ${({ theme, mode }) => mode && theme[mode].bgDescription};
    ${Shadow}
    ${FlexCenter}
    padding: 1rem;
    margin: 0 0 1rem 0;
    border-radius: 1rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
