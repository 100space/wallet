import styled from "styled-components"
import { ISizeProps, IMnemonicBox, IMenmonicContent } from "./interface"

export const MnemonicBoxWrap = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
`

export const MnemonicBox = styled.div<IMnemonicBox>`
    position: relative;
    padding: 1rem 2rem;
    width: ${(props) => props.width || "100%"};
    min-height: 9rem;
    height: ${(props) => props.height || "100%"};
    background-color: ${(props) => props.bgColor || "#555555"};
    box-sizing: border-box;
`

export const MnemonicContent = styled.div<IMenmonicContent>`
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    color: ${(props) => props.color || "#bbbbbb"};
    font-size: 1.6rem;
    font-weight: 400;
    filter: blur(${(props) => props.blur || "0.4rem"});
`

export const MnemonicVisible = styled.div<ISizeProps>`
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    bottom: 0rem;
    width: ${(props) => props.width || "100%"};
    font-size: 2.5rem;
    color: white;
`
