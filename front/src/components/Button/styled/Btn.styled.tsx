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
        color: ${({ theme, mode }) => mode && theme[mode].text};
        background: ${({ backgroundcolor, theme, mode }) => backgroundcolor || (mode && theme[mode].buttonBg)};
    }
    &:disabled:active {
        background: ${({ mode, theme }) => mode && theme[mode].buttonHover};
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
    &:active {
        background: ${({ mode, theme }) => mode && theme[mode].buttonHover};
    }
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
        background: ${({ mode, theme }) => mode && theme[mode].buttonHover};
    }
`

export const TxBtnWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: space-evenly;
    width: ${({ width }) => width || "100%"};
`

export const TxBtnContent = styled.button<ISizeProps>`
    cursor: pointer;
    display: inline-block;
    margin: 1rem;
    width: 12rem;
    height: 4rem;
    border: none;
    color: ${({ mode, theme }) => mode && theme[mode].text};
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 0.5rem;
    background-color: ${({ mode, theme, disabled }) =>
        (disabled && mode && theme[mode].AccountGetBtnBg) || (mode && theme[mode].txBg)};
    transition: 0.2s all;

    &:hover,
    &:active {
        color: ${({ mode, theme }) => mode && theme[mode].txBg};
        background-color: ${({ mode, theme }) => mode && theme[mode].text};
    }
`
