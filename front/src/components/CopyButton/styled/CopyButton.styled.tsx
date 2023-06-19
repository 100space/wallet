import { ISizeProps } from "./interface"
import styled from "styled-components"

export const CopyFunctionWrap = styled.div<ISizeProps>`
    cursor: pointer;
    display: flex;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    color: ${(props) => props.color || "black"};
`

export const CopyFunctionIcon = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    font-size: 1.75rem;
`

export const CopyFunctionContent = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    font-size: 1.2rem;
    font-weight: 700;
`