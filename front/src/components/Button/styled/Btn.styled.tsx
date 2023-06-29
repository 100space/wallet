import styled from "styled-components"
import { IBtn, ISizeProps, IonClickProps, IProfileBtn } from "@utils/interFace/styled.interface"

export const Btn = styled.button<IProfileBtn>`
    cursor: pointer;
    display: block;
    width: ${(props) => props.width || "30%"};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || ""};
    border-radius: ${({profile}) => "0.7rem" || "5rem"};
    border: none;
    box-shadow: ${({profile}) => "none" || "0 0 0.2rem 0.1rem #3a3939"};
    font-size: ${(props) => props.fontSize || "1.2rem"};
    color: ${({ backgroundcolor, theme, mode, profile }) => (backgroundcolor && "#333") || (mode && theme[mode].text)};
    background: ${({ backgroundcolor, theme, mode, profile }) => backgroundcolor || (mode && theme[mode].bg200) || (profile && "black")};
    &:hover {
        /* background: ${({ theme, mode }) => mode && theme[mode].buttonHover}; */
    }
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
    color: ${({ mode, theme }) => mode && theme[mode].bgBtn};
    &:active {
        background: ${({ mode, theme }) => mode && theme[mode].buttonBg};
    }
`
