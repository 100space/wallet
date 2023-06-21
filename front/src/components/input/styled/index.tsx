import { FlexCenter } from "@styled/index"
import { IFocusTypeSize, ISizeProps } from "@utils/interFace/styled.interface"

import styled from "styled-components"

export const InputWrap = styled.div<IFocusTypeSize>`
    ${(props) => (props.type === "password" ? "width: calc(100% - 4rem)" : `width:${props.width}%`)};
    ${(props) => props.height && `height:  ${props.height}rem;`}
    ${(props) => (props.focusmode === "on" ? "border: 0.2rem solid #FFC964" : "border: 0.1rem solid #cccccc")};
    ${(props) => (props.type === "search" ? "border-radius: 2rem;" : "")};
    ${(props) => (props.type === "mnemonic" ? "border-radius: 0.5rem;" : "")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1.4rem;
    margin: 0 auto;
    & > img {
        width: 3rem;
        height: 3rem;
    }
    background-color: #333;
`

export const InputElement = styled.input<ISizeProps>`
    width: 85%;
    ${(props) => props.height && `font-size:  ${(props.height as number) * 0.6}rem;`}
    border: none;
    &:focus {
        outline: none;
    }
    background-color: #333;
    color: #fff;
`
export const HideIcon = styled.div<ISizeProps>`
    ${FlexCenter}
    cursor: pointer;
    right: 1.5rem;
    bottom: 0rem;
    width: ${(props) => props.width || "100%"};
    font-size: 3rem;
    color: ${({ theme, mode }) => mode && theme[mode].text};
`
