import { ISizeProps } from "@utils/interFace/styled.interface"
import styled from "styled-components"

export const NFTSlideWrap = styled.div<ISizeProps>`
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    width: ${({ width }) => width || "100%"};
    /* background-color: ${({ mode, theme }) => mode && theme[mode].basicDeepBg}; */
    border-radius: 1rem;
    box-sizing: border-box;
    overflow-x: scroll;
    & > div + div {
        margin-left: 1.5rem;
    }
`
