import styled from "styled-components"
import { IBtn } from "@utils/interFace/styled.interface"

export const Btn = styled.button<IBtn>`
    cursor: pointer;
    display: block;
    width: ${(props) => props.width || "30%"};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || ""};
    border-radius: 5rem;
    border: none;
    box-shadow: 0 0 0.2rem 0.1rem #3a3939;
    font-size: ${(props) => props.fontSize || "1.2rem"};
    color: ${({ theme, mode }) => mode && theme[mode].text};
    background: ${({ theme, mode }) => mode && theme[mode].bg200};
    &:hover {
        background: ${({ theme, mode }) => mode && theme[mode].buttonHover};
    }
    &:active {
        background: ${({ theme, mode }) => mode && theme[mode].buttonActive};
    }
    transition: all 0.2s ease-out;
`
