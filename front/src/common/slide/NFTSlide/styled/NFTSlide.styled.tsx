import { ISizeProps } from "@utils/interFace/styled.interface";
import styled from "styled-components";

export const NFTSlideWrap = styled.div<ISizeProps>`
    padding: 1rem;
    display: flex;
    width: ${({ width }) => width || "100%"};
    /* background-color: ${({ mode, theme }) => mode && theme[mode].basicDeepBg}; */
    background-color: #454343;
    border-radius: 1rem;
    box-sizing: border-box;
    overflow-x: scroll;

    & > div + div {
        margin-left: 1.5rem;
    }
`