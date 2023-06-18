import { ISizeProps, ICheckBox } from "./interface"
import styled from "styled-components"


export const AgreeWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    display: flex;
    align-items: center;
`

export const AgreeCheckBoxWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const AgreeCheckBox = styled.input<ICheckBox>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    
`

export const AgreeContentWrap = styled.div<ISizeProps>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const AgreeContent = styled.p<ISizeProps>`
    color: ${(props) => props.color || "black"};
    font-size: 1.2rem;
    font-weight: 700;
`