import { FullScreen } from "@styled/index"
import styled from "styled-components"
const mode = "darkMode"
export const LoginWrap = styled.div`
    ${FullScreen}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({ theme }) => theme[mode].basicBg};
    & > img {
        width: 100%;
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
        background: ${({ theme }) => theme[mode].bg200};
        transition: all 0.2s ease-out;
    }
    & > a {
        width: 90%;
        height: 5.6rem;
    }
    & > div > button {
        width: 90%;
        height: 5.6rem;
        border: none;
        border-radius: 5rem;
        margin: 3rem auto 0rem;
        display: inline-block;
        background: ${({ theme }) => theme[mode].bg200};
        transition: all 0.2s ease-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: ${({ theme }) => theme[mode].buttonHover};
        }
        &:active {
            background: ${({ theme }) => theme[mode].buttonActive};
        }
    }
`
