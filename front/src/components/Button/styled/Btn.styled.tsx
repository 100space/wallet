import styled from "styled-components"
import { IBtn, ISizeProps, IonClickProps, IProfileBtn } from "@utils/interFace/styled.interface"

export const Btn = styled.button<IProfileBtn>`
    cursor: pointer;
    display: block;
    width: ${(props) => props.width || "30%"};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || ""};
    border-radius: ${({ profile }) => (profile === "true" && "0.7rem") || "5rem"};
    border: none;
    box-shadow: ${({ profile }) => (profile === "true" && "none") || "0 0 0.2rem 0.1rem #3a3939"};
    font-size: ${(props) => props.fontSize || "1.7rem"};
    color: ${({ color, theme, mode, profile }) => color || (mode && theme[mode].text)};
    background: ${({ backgroundcolor, theme, mode }) => backgroundcolor || (mode && theme[mode].buttonBg) };
    &:active {
        background: ${({ theme, mode }) => mode && theme[mode].buttonHover};
    }
    transition: all 0.2s ease-out;
`

export const TokenListBtnWrap = styled.div<ISizeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    /* background: ${({ mode, theme }) => mode && theme[mode].buttonBg}; */
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
    color: ${({  mode, theme }) => mode && theme[mode].text};
    background: ${({  mode, theme }) =>  mode && theme[mode].buttonBg };
    &:active {
        background: ${({ mode, theme }) => mode && theme[mode].buttonBg };
    }
`
