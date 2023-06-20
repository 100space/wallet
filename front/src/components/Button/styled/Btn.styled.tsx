import styled from "styled-components"
import { IBtn } from "@utils/interFace/styled.interface"

export const Btn = styled.button<IBtn>`
    cursor: pointer;
    width: ${props => props.width  || "30%"};
    height: ${props => props.height || ""};
    margin: ${props => props.margin || ""};
    border-radius: 35px;
    border: none;
    box-shadow: 3.5px 3.5px 3.5px 3.5px #3a3939;
    font-size: 1.2rem;
    color: ${props => props.theme.btnTheme.btnColor };
    background-color: ${ props => props.theme.btnTheme.primaryColor };
    &:hover{
        background-color: ${ props => props.theme.btnTheme.btnHover };
    }
    transition: all 0.2s ease-out; 
`