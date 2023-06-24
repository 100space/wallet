import { FlexCenter } from "@styled/index"
import { IStateProps } from "@utils/interFace/styled.interface"
import styled, { css } from "styled-components"

export const HamburgerWrap = styled.div<IStateProps>`
    cursor: pointer;
    transition: all 0.5s;
    &:active > span {
        background-color: ${({ theme, mode }) => mode && theme[mode].text};
        transform: translateY(0.3rem);
        transition: all 0.5s;
    }
    & > span {
        transition: all 0.5s;
        background-color: ${({ theme, mode }) => mode && theme[mode].text};
    }
    ${({ sideBarState }) =>
        sideBarState === true &&
        css`
            & > span:nth-child(1) {
                width: 2rem;
                transform: rotate(-45deg) translateX(-0.6rem);
            }
            & > span:nth-child(2) {
                width: 3rem;
                transform: rotate(0deg);
            }
            & > span:nth-child(3) {
                width: 2rem;
                transform: rotate(45deg) translateX(-0.6rem);
            }
        `}
`

export const HamburgerStick = styled.span`
    display: block;
    margin: 0.8rem;
    width: 3rem;
    height: 0.25rem;
    border-radius: 0.125rem;
    background-color: #453a33;
`
