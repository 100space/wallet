import { ISizeProps } from "@utils/interFace/styled.interface"
import styled, { css } from "styled-components"

export const FlexCenter = css`
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
`
export const FullScreen = css`
    width: 100%;
    height: 100%;
`
export const RootWrap = styled.div<ISizeProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 3rem;
    background: ${({ theme, mode }) => mode && theme[mode].basicBg};
`
export const SizePropsStyled = css<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`
