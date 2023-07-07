import { ISizeProps } from "@utils/interFace/styled.interface"
import styled, { keyframes } from "styled-components"

const animateTextBackground = keyframes`
    0%{
        background-position: 0 0;
    }

    25%{
        background-position: 100% 0;
    }

    50%{
        background-position: 100%;
    }

    75%{
        background-position: 0 100%;
    }

    100%{
        background-position: 0 0;
    }
`

export const Error404Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & > div:nth-last-child(1) {
        margin-top: 3rem;
        height: 5rem;
    }
`
export const ErrorNumber = styled.h1`
    font-size: 12rem;
    font-weight: bold;

    &::after {
        content: attr(data-h1);
        color: transparent;
        background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        text-shadow: 1px 1px 2px transparentize(#fff, .75);
        animation: ${animateTextBackground} 4s ease-in-out infinite;
    }

    & > svg > defs > * {
        color: white;
        background-color: black;
    }
`
export const ErrorContent = styled.p<ISizeProps>`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme, mode }) => mode && theme[mode].text };
`