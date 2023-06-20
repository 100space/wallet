import { FullScreen } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const LoginWrap = styled.div<ISizeProps>`
    ${FullScreen}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({ theme, mode }) => mode && theme[mode].basicBg};
    & > img {
        width: 90%;
        margin: 0 auto;
    }
    & > div {
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &:nth-child(2) {
        width: 90%;
        height: 5.6rem;
        border: none;
        border-radius: 5rem;
        margin: 3rem auto 0rem;
        display: inline-block;
        background: ${({ theme, mode }) => mode && theme[mode].bg200};
        transition: all 0.2s ease-out;
    }
    & > a {
        width: 90%;
        height: 5.6rem;
    }
    & > .modeChange {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10rem;
        height: 3rem;
        color: red;
    }
    & > div > button {
        width: 90%;
        height: 5.6rem;
        border: none;
        border-radius: 5rem;
        margin: 3rem auto 0rem;
        display: inline-block;
        background: ${({ theme, mode }) => mode && theme[mode].bg200};
        transition: all 0.2s ease-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: ${({ theme, mode }) => mode && theme[mode].buttonHover};
        }
        &:active {
            background: ${({ theme, mode }) => mode && theme[mode].buttonActive};
        }
    }
`
