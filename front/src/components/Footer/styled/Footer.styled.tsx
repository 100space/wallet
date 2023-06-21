import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"
import { NavLink } from "react-router-dom"
import { theme } from "colorTheme"

export const FooterWrapper = styled.div<ISizeProps>`
    width: 100%;
    height: 8rem;
    background: ${({ theme, mode }) => mode && theme[mode].basicBg};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FooterWrap = styled.ul`
    width: 100%;
    height: 6rem;
    list-style: none;
    display: flex;
    align-items: center;
`

export const IconWrapper = styled.li<ISizeProps>`
    & > a > svg {
        font-size: 2.2rem;
    }

    &,
    & > a {
        width: ${(props) => props.width || "25%"};
        height: 100%;
        color: ${(props) => props.color || "#f9f9f9"};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.4rem;
    }
`
