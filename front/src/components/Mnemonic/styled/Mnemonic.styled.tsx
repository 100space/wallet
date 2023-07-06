import { SizePropsStyled } from "@styled/index"
import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"
import { IMnemonicBox, IMenmonicContent } from "./interface"

export const MnemonicBoxWrap = styled.div<ISizeProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${SizePropsStyled}
`

export const MnemonicBox = styled.div<IMnemonicBox>`
    ${SizePropsStyled}
        position: relative;
    padding: 1rem 2rem;
    min-height: 9rem;
    background-color: ${({ theme, mode }) => mode && theme[mode].bgInfo};
    box-sizing: border-box;
`

export const MnemonicContent = styled.div<IMenmonicContent>`
    ${SizePropsStyled}
    color: ${({ theme, mode }) => mode && theme[mode].text};
    font-size: 1.8rem;
    line-height: 3rem;
    font-weight: 400;
    word-break: keep-all;
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
