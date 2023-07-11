import { FlexCenter } from "@styled/index";
import { ISizeProps } from "@utils/interFace/styled.interface";
import { styled } from "styled-components";

export const ArrowHamburgerWrap = styled.div<ISizeProps>`
    position: relative;
    z-index: 999;
    ${FlexCenter};
    &:active > span {
        background-color: ${({ theme, mode }) => mode && theme[mode].text};
        transform: translateY(0.3rem);
        transition: all 0.5s;
    }
    height: 100%;
    & > span:nth-child(1) {
        width: 2rem;
        transform: rotate(-45deg) translateX(-0.6rem);
    }
    & > span:nth-child(2) {
        width: 3rem;
        transform: rotate(0deg) translateX(0);
    }
    & > span:nth-child(3) {
        width: 2rem;
        transform: rotate(45deg) translateX(-0.6rem);
    }
`

export const ArrowHamburgerStick = styled.span<ISizeProps>`
    display: block;
    margin: 0.4rem;
    width: 3rem;
    height: 0.25rem;
    border-radius: 0.125rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].text};
`