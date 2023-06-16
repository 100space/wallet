import { FullScreen } from "@styled/index"
import styled from "styled-components"

export const LoginWrap = styled.div`
    ${FullScreen}
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({ theme }) => theme["darkMode"].basicBg};
    & > img {
        width: 100%;
    }
    & > div {
        height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > div > button {
        width: 90%;
        height: 5.6rem;
        border: none;
        border-radius: 5rem;
        margin: 0 auto;
        display: inline-block;
        background: ${({ theme }) => theme["darkMode"].bg200};
        transition: all 0.2s ease-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: ${({ theme }) => theme["darkMode"].buttonHover};
        }
        &:active {
            background: ${({ theme }) => theme["darkMode"].buttonActive};
        }
    }
`
