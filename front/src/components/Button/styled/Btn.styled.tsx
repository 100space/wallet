import styled from "styled-components"
import { IBtn, ISizeProps, IonClickProps, IProfileBtn } from "@utils/interFace/styled.interface"

export const Btn = styled.button<IProfileBtn>`
    cursor: pointer;
    display: block;
    width: ${(props) => props.width || "30%"};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || ""};
    border-radius: ${({ profile }) => (profile === "true" && "0.7rem") || "1.4rem"};
    border: none;
    font-size: ${(props) => props.fontSize || "1.7rem"};
    color: ${({ color, theme, mode, profile }) => color || (mode && theme[mode].text)};
    background: ${({ backgroundcolor, theme, mode }) => backgroundcolor || (mode && theme[mode].buttonBg)};
    font-family: "Titillium Web", sans-serif;
    &:active {
        background: ${({ theme, mode }) => mode && theme[mode].buttonHover};
    }
    transition: all 0.2s ease-out;
    &:disabled {
        background: ${({ theme, mode }) => mode && theme[mode].basicBg};
    }
`

export const TokenListBtnWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    background: ${({ mode, theme }) => mode && theme[mode].tokenBg};
    border-radius: 1rem;
`

export const TokenListButton = styled.button<IonClickProps>`
    cursor: pointer;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    padding: 1rem 2rem;
    font-size: 1.4rem;
    font-weight: 700;
    border: none;
    border-radius: 4rem;
    color: ${({ mode, theme }) => mode && theme[mode].text};
    background: ${({ mode, theme }) => mode && theme[mode].tokenBg};
    &:active {
        background: ${({ mode, theme }) => mode && theme[mode].tokenBg};
    }
`
