import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { NavLink } from "react-router-dom"

export const FooterWrapper = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #2d2d2d;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FooterWrap = styled.ul`
    width: 100%;
    height: 3rem;
    list-style: none;
    display: flex;
    align-items: center;
`

export const IconWrapper = styled.li<ISizeProps>`
    & > svg {
        font-size: 2.4rem;
    }

    &, & > a {
        width: ${props => props.width || "25%"};
        height: 100%;
        color: ${props => props.color || "#f9f9f9"};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.2rem;
    }
`