import styled from "styled-components"
import { ISizeProps } from "@utils/interFace/styled.interface"

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
        color: ${({ theme, mode, color }) => color === "true" && mode && theme[mode].footerColor};
    }

    &,
    & > a {
        width: ${(props) => props.width || "25%"};
        height: 100%;
        color: ${({ theme, mode, color }) => color === "true" && mode && theme[mode].footerColor};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 1.4rem;
    }
`
